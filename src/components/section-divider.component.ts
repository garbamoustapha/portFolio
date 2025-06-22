import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-divider',
  imports: [CommonModule],
  template: `
    <div class="section-divider" [class.animated]="animated">
      <div class="divider-line"></div>
      <div class="divider-center">
        <div class="center-diamond"></div>
        <div class="center-glow"></div>
      </div>
      <div class="divider-particles">
        <div
          class="particle"
          *ngFor="let particle of particles"
          [style.left.px]="particle.x"
          [style.animation-delay.s]="particle.delay"
        ></div>
      </div>
    </div>
  `,
  styles: [
    `
      .section-divider {
        position: relative;
        width: 100%;
        height: 60px;
        margin: 40px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .divider-line {
        position: absolute;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          #00ff7f 20%,
          #00ffff 50%,
          #00ff7f 80%,
          transparent 100%
        );
        animation: line-pulse 3s ease-in-out infinite;
      }

      @keyframes line-pulse {
        0%,
        100% {
          opacity: 0.5;
          transform: scaleX(0.8);
        }
        50% {
          opacity: 1;
          transform: scaleX(1);
        }
      }

      .divider-center {
        position: relative;
        width: 40px;
        height: 40px;
        z-index: 2;
      }

      .center-diamond {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        background: #00ff7f;
        transform: translate(-50%, -50%) rotate(45deg);
        border: 2px solid #00ffff;
        box-shadow: 0 0 20px rgba(0, 255, 127, 0.8),
          inset 0 0 10px rgba(0, 255, 255, 0.5);
        animation: diamond-spin 4s linear infinite;
      }

      @keyframes diamond-spin {
        0% {
          transform: translate(-50%, -50%) rotate(45deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(405deg);
        }
      }

      .center-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60px;
        height: 60px;
        background: radial-gradient(
          circle,
          rgba(0, 255, 127, 0.3) 0%,
          rgba(0, 255, 255, 0.2) 50%,
          transparent 100%
        );
        transform: translate(-50%, -50%);
        animation: glow-pulse 2s ease-in-out infinite alternate;
      }

      @keyframes glow-pulse {
        from {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.6;
        }
        to {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0.8;
        }
      }

      .divider-particles {
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      .particle {
        position: absolute;
        width: 3px;
        height: 3px;
        background: #00ff7f;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        animation: particle-float 5s ease-in-out infinite;
        box-shadow: 0 0 10px rgba(0, 255, 127, 0.8);
      }

      @keyframes particle-float {
        0%,
        100% {
          opacity: 0;
          transform: translateY(-50%) translateX(-20px);
        }
        20% {
          opacity: 1;
        }
        80% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translateY(-50%) translateX(20px);
        }
      }

      /* Animated variant */
      .section-divider.animated .divider-line {
        animation-duration: 2s;
      }

      .section-divider.animated .center-diamond {
        animation-duration: 3s;
      }

      .section-divider.animated .center-glow {
        animation-duration: 1.5s;
      }

      /* Responsive design */
      @media (max-width: 768px) {
        .section-divider {
          height: 40px;
          margin: 20px 0;
        }

        .center-diamond {
          width: 15px;
          height: 15px;
        }

        .center-glow {
          width: 40px;
          height: 40px;
        }
      }

      /* High contrast mode */
      @media (prefers-contrast: high) {
        .divider-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            #00ff00 20%,
            #ffffff 50%,
            #00ff00 80%,
            transparent 100%
          );
        }

        .center-diamond {
          background: #00ff00;
          border-color: #ffffff;
        }

        .particle {
          background: #00ff00;
        }
      }

      /* Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
        }
      }
    `,
  ],
})
export class SectionDividerComponent {
  @Input() animated = true;

  particles = Array.from({ length: 8 }, (_, i) => ({
    x: (i + 1) * (100 / 9), // Distribute particles across width
    delay: i * 0.5, // Stagger animation delays
  }));
}
