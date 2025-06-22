import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { MatrixRainComponent } from './matrix-rain.component';
import { GamingParticlesComponent } from './gaming-particles.component';
import { CyberOverlayComponent } from './cyber-overlay.component';
import { GamingAudioComponent } from './gaming-audio.component';

@Component({
  selector: 'app-gamer-background',
  imports: [
    MatrixRainComponent,
    GamingParticlesComponent,
    CyberOverlayComponent,
    GamingAudioComponent,
  ],
  template: `
    <div class="gamer-background">
      <canvas #threeCanvas class="three-canvas"></canvas>
      <app-matrix-rain></app-matrix-rain>
      <app-gaming-particles></app-gaming-particles>
      <app-cyber-overlay></app-cyber-overlay>
      <app-gaming-audio></app-gaming-audio>
    </div>
  `,
  styles: [
    `
      .gamer-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        overflow: hidden;
        background: radial-gradient(
          ellipse at center,
          #0f1419 0%,
          #070b10 100%
        );
        pointer-events: none;
      }

      .three-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.8;
      }
    `,
  ],
})
export class GamerBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('threeCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private lines!: THREE.LineSegments;
  private animationId!: number;
  private mouseX = 0;
  private mouseY = 0;
  ngOnInit() {
    // Attendre que le DOM soit prêt
    setTimeout(() => {
      this.initThreeJS();
      this.createParticleSystem();
      this.createWireframeLines();
      this.setupEventListeners();
      this.animate();
    }, 100);
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
  private initThreeJS() {
    if (!this.canvasRef?.nativeElement) {
      console.warn('Canvas element not ready');
      return;
    }

    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x070b10, 10, 50);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
  }
  private createParticleSystem() {
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position - create clusters and spread
      const cluster = Math.floor(i / 9);
      const angle = (cluster / particleCount) * Math.PI * 4;
      const radius = 5 + Math.random() * 15;

      positions[i] = Math.cos(angle) * radius + (Math.random() - 0.5) * 10;
      positions[i + 1] = Math.sin(angle) * radius + (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      // Sizes for variety
      sizes[i / 3] = Math.random() * 0.05 + 0.01;

      // Enhanced color palette with more gaming colors
      const rand = Math.random();
      if (rand < 0.4) {
        // Matrix green
        colors[i] = 0;
        colors[i + 1] = 1;
        colors[i + 2] = 0.5;
      } else if (rand < 0.6) {
        // Electric cyan
        colors[i] = 0;
        colors[i + 1] = 1;
        colors[i + 2] = 1;
      } else if (rand < 0.8) {
        // Neon blue
        colors[i] = 0.2;
        colors[i + 1] = 0.5;
        colors[i + 2] = 1;
      } else {
        // Electric purple
        colors[i] = 0.8;
        colors[i + 1] = 0.2;
        colors[i + 2] = 1;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private createWireframeLines() {
    const lineCount = 50;
    const positions = new Float32Array(lineCount * 6);
    const colors = new Float32Array(lineCount * 6);

    for (let i = 0; i < lineCount * 6; i += 6) {
      // Line start
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      // Line end
      positions[i + 3] = positions[i] + (Math.random() - 0.5) * 2;
      positions[i + 4] = positions[i + 1] + (Math.random() - 0.5) * 2;
      positions[i + 5] = positions[i + 2] + (Math.random() - 0.5) * 2;

      // Colors for both points
      for (let j = 0; j < 6; j += 3) {
        colors[i + j] = 0;
        colors[i + j + 1] = 1;
        colors[i + j + 2] = 0.5;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    this.lines = new THREE.LineSegments(geometry, material);
    this.scene.add(this.lines);
  }

  private setupEventListeners() {
    window.addEventListener('resize', () => this.onWindowResize());
    window.addEventListener('mousemove', (event) => this.onMouseMove(event));
  }
  private onWindowResize() {
    if (!this.camera || !this.renderer) return;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private onMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  }
  private animate() {
    if (!this.renderer || !this.scene || !this.camera) return;

    this.animationId = requestAnimationFrame(() => this.animate());

    const time = Date.now() * 0.001;

    // Enhanced particle animation
    if (this.particles) {
      this.particles.rotation.x = time * 0.1;
      this.particles.rotation.y = time * 0.15;

      // Pulsing effect
      const scale = 1 + Math.sin(time * 2) * 0.1;
      this.particles.scale.setScalar(scale);
    }

    // Enhanced lines animation
    if (this.lines) {
      this.lines.rotation.x = time * 0.05;
      this.lines.rotation.y = time * 0.08;
      this.lines.rotation.z = time * 0.03;
    }

    // Enhanced mouse interaction with smooth following
    const targetX = this.mouseX * 0.8;
    const targetY = this.mouseY * 0.8;

    this.camera.position.x += (targetX - this.camera.position.x) * 0.02;
    this.camera.position.y += (targetY - this.camera.position.y) * 0.02;

    // Add slight camera movement for dynamic feel
    this.camera.position.z = 5 + Math.sin(time * 0.5) * 0.5;

    this.camera.lookAt(this.scene.position);

    try {
      this.renderer.render(this.scene, this.camera);
    } catch (error) {
      console.warn('Rendering error:', error);
    }
  }
}
