import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-matrix-rain',
  template: ` <canvas #matrixCanvas class="matrix-canvas"></canvas> `,
  styles: [
    `
      .matrix-canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -3;
        opacity: 0.4;
        pointer-events: none;
      }
    `,
  ],
})
export class MatrixRainComponent implements OnInit, OnDestroy {
  @ViewChild('matrixCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationId!: number;
  private drops: number[] = [];
  private fontSize = 16;
  private columns = 0;

  // Matrix characters
  private chars =
    'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  ngOnInit() {
    setTimeout(() => {
      this.initCanvas();
      this.animate();
    }, 200);
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
  private initCanvas() {
    if (!this.canvasRef?.nativeElement) {
      console.warn('Matrix canvas element not ready');
      return;
    }

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.warn('Could not get 2D context for matrix canvas');
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

    this.columns = Math.floor(canvas.width / this.fontSize);

    // Initialize drops
    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = Math.random() * canvas.height;
    }
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    this.draw();
  }

  private draw() {
    const canvas = this.canvasRef.nativeElement;

    // Create trailing effect
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text properties
    this.ctx.fillStyle = '#00ff7f';
    this.ctx.font = `${this.fontSize}px 'Orbitron', monospace`;

    // Draw characters
    for (let i = 0; i < this.drops.length; i++) {
      const char = this.chars[Math.floor(Math.random() * this.chars.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      // Add glow effect
      this.ctx.shadowColor = '#00ff7f';
      this.ctx.shadowBlur = 10;
      this.ctx.fillText(char, x, y);
      this.ctx.shadowBlur = 0;

      // Reset drop to top with random chance
      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      // Move drop down
      this.drops[i]++;
    }
  }
}
