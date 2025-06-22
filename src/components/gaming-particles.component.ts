import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'spark' | 'glow' | 'trail';
}

@Component({
  selector: 'app-gaming-particles',
  template: ` <canvas #particlesCanvas class="particles-canvas"></canvas> `,
  styles: [
    `
      .particles-canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -2;
        pointer-events: none;
        opacity: 0.7;
      }
    `,
  ],
})
export class GamingParticlesComponent implements OnInit, OnDestroy {
  @ViewChild('particlesCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationId!: number;
  private particles: Particle[] = [];
  private mouseX = 0;
  private mouseY = 0;
  private isMouseActive = false;
  ngOnInit() {
    setTimeout(() => {
      this.initCanvas();
      this.setupEventListeners();
      this.createInitialParticles();
      this.animate();
    }, 300);
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
  private initCanvas() {
    if (!this.canvasRef?.nativeElement) {
      console.warn('Particles canvas element not ready');
      return;
    }

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.warn('Could not get 2D context for particles canvas');
      return;
    }

    this.ctx = ctx;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private setupEventListeners() {
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.isMouseActive = true;

      // Create particles at mouse position
      if (Math.random() < 0.3) {
        this.createParticle(this.mouseX, this.mouseY, 'spark');
      }
    });

    window.addEventListener('click', (e) => {
      // Create burst effect on click
      for (let i = 0; i < 15; i++) {
        this.createParticle(e.clientX, e.clientY, 'glow');
      }
    });

    // Reset mouse activity after timeout
    let mouseTimeout: any;
    window.addEventListener('mousemove', () => {
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        this.isMouseActive = false;
      }, 100);
    });
  }

  private createInitialParticles() {
    // Create ambient particles
    for (let i = 0; i < 50; i++) {
      this.createParticle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        'glow'
      );
    }
  }

  private createParticle(
    x: number,
    y: number,
    type: 'spark' | 'glow' | 'trail'
  ) {
    const colors = {
      spark: ['#00ff7f', '#00ffff', '#ffff00'],
      glow: ['#00ff7f', '#007f3f', '#00bf5f'],
      trail: ['#00ff7f', '#ffffff'],
    };

    const particle: Particle = {
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 0,
      maxLife: 60 + Math.random() * 120,
      size: Math.random() * 3 + 1,
      color: colors[type][Math.floor(Math.random() * colors[type].length)],
      type: type,
    };

    this.particles.push(particle);

    // Limit particle count
    if (this.particles.length > 200) {
      this.particles.splice(0, 50);
    }
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    this.update();
    this.draw();
  }

  private update() {
    // Create ambient particles
    if (Math.random() < 0.1) {
      this.createParticle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        'glow'
      );
    }

    // Update particles
    this.particles = this.particles.filter((particle) => {
      particle.life++;
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Apply gravity for sparks
      if (particle.type === 'spark') {
        particle.vy += 0.1;
      }

      // Bounce off edges
      if (particle.x < 0 || particle.x > window.innerWidth) {
        particle.vx *= -0.8;
      }
      if (particle.y < 0 || particle.y > window.innerHeight) {
        particle.vy *= -0.8;
      }

      // Mouse attraction for glow particles
      if (particle.type === 'glow' && this.isMouseActive) {
        const dx = this.mouseX - particle.x;
        const dy = this.mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          particle.vx += dx * 0.0001;
          particle.vy += dy * 0.0001;
        }
      }

      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      return particle.life < particle.maxLife;
    });
  }

  private draw() {
    const canvas = this.canvasRef.nativeElement;

    // Clear with slight transparency for trail effect
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw particles
    this.particles.forEach((particle) => {
      const alpha = 1 - particle.life / particle.maxLife;
      const size = particle.size * alpha;

      this.ctx.save();
      this.ctx.globalAlpha = alpha;

      // Different drawing styles for different particle types
      switch (particle.type) {
        case 'spark':
          this.ctx.fillStyle = particle.color;
          this.ctx.shadowColor = particle.color;
          this.ctx.shadowBlur = 10;
          this.ctx.fillRect(
            particle.x - size / 2,
            particle.y - size / 2,
            size,
            size
          );
          break;

        case 'glow':
          this.ctx.fillStyle = particle.color;
          this.ctx.shadowColor = particle.color;
          this.ctx.shadowBlur = 20;
          this.ctx.beginPath();
          this.ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          this.ctx.fill();
          break;

        case 'trail':
          this.ctx.strokeStyle = particle.color;
          this.ctx.lineWidth = size;
          this.ctx.lineCap = 'round';
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(
            particle.x - particle.vx * 5,
            particle.y - particle.vy * 5
          );
          this.ctx.stroke();
          break;
      }

      this.ctx.restore();
    });
  }
}
