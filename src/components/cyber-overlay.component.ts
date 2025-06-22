import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyber-overlay',
  template: `
    <div class="cyber-overlay">
      <!-- HUD Corners -->
      <div class="hud-corner top-left"></div>
      <div class="hud-corner top-right"></div>
      <div class="hud-corner bottom-left"></div>
      <div class="hud-corner bottom-right"></div>

      <!-- Scan Lines -->
      <div class="scan-lines"></div>

      <!-- Grid Overlay -->
      <div class="grid-overlay"></div>

      <!-- Glitch Effects -->
      <div class="glitch-overlay"></div>

      <!-- Gaming UI Elements -->
      <div class="ui-elements">
        <div class="status-bar top">
          <span class="status-item">SYS_ONLINE</span>
          <span class="status-item">{{ currentTime }}</span>
        </div>

        <div class="side-panel left">
          <div class="panel-line"></div>
          <div class="panel-line"></div>
          <div class="panel-line"></div>
        </div>

        <div class="side-panel right">
          <div class="panel-line"></div>
          <div class="panel-line"></div>
          <div class="panel-line"></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .cyber-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
      }

      .hud-corner {
        position: absolute;
        width: 50px;
        height: 50px;
        border: 2px solid #00ff7f;
        opacity: 0.6;
      }

      .hud-corner.top-left {
        top: 20px;
        left: 20px;
        border-right: none;
        border-bottom: none;
        animation: pulse-corner 3s ease-in-out infinite;
      }

      .hud-corner.top-right {
        top: 20px;
        right: 20px;
        border-left: none;
        border-bottom: none;
        animation: pulse-corner 3s ease-in-out infinite 0.5s;
      }

      .hud-corner.bottom-left {
        bottom: 20px;
        left: 20px;
        border-right: none;
        border-top: none;
        animation: pulse-corner 3s ease-in-out infinite 1s;
      }

      .hud-corner.bottom-right {
        bottom: 20px;
        right: 20px;
        border-left: none;
        border-top: none;
        animation: pulse-corner 3s ease-in-out infinite 1.5s;
      }

      @keyframes pulse-corner {
        0%,
        100% {
          opacity: 0.4;
          box-shadow: 0 0 0 rgba(0, 255, 127, 0);
        }
        50% {
          opacity: 0.8;
          box-shadow: 0 0 20px rgba(0, 255, 127, 0.5);
        }
      }

      .scan-lines {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          transparent 50%,
          rgba(0, 255, 127, 0.02) 50%
        );
        background-size: 100% 4px;
        animation: scan 2s linear infinite;
      }

      @keyframes scan {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(4px);
        }
      }

      .grid-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            rgba(0, 255, 127, 0.05) 1px,
            transparent 1px
          ),
          linear-gradient(90deg, rgba(0, 255, 127, 0.05) 1px, transparent 1px);
        background-size: 50px 50px;
        animation: grid-drift 30s linear infinite;
        opacity: 0.3;
      }

      @keyframes grid-drift {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(50px, 50px);
        }
      }

      .glitch-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(0, 255, 127, 0.1) 50%,
          transparent 100%
        );
        animation: glitch-sweep 8s ease-in-out infinite;
        opacity: 0;
      }

      @keyframes glitch-sweep {
        0%,
        90%,
        100% {
          opacity: 0;
          transform: translateX(-100%);
        }
        5%,
        15% {
          opacity: 1;
          transform: translateX(100vw);
        }
      }

      .ui-elements {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .status-bar {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 30px;
        font-family: 'Orbitron', monospace;
        font-size: 12px;
        color: #00ff7f;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-bottom: 1px solid rgba(0, 255, 127, 0.3);
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
      }

      .status-bar.top {
        top: 0;
        left: 0;
        right: 0;
      }

      .status-item {
        position: relative;
        text-shadow: 0 0 10px #00ff7f;
      }

      .status-item::before {
        content: '●';
        margin-right: 8px;
        color: #00ff7f;
        animation: blink 2s ease-in-out infinite;
      }

      @keyframes blink {
        0%,
        50% {
          opacity: 1;
        }
        51%,
        100% {
          opacity: 0.3;
        }
      }

      .side-panel {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .side-panel.left {
        left: 10px;
      }

      .side-panel.right {
        right: 10px;
      }

      .panel-line {
        width: 100%;
        height: 50px;
        background: linear-gradient(
          to bottom,
          transparent,
          #00ff7f,
          transparent
        );
        opacity: 0.6;
        animation: panel-pulse 3s ease-in-out infinite;
      }

      .panel-line:nth-child(2) {
        animation-delay: 1s;
      }

      .panel-line:nth-child(3) {
        animation-delay: 2s;
      }

      @keyframes panel-pulse {
        0%,
        100% {
          opacity: 0.3;
          transform: scaleY(0.5);
        }
        50% {
          opacity: 0.8;
          transform: scaleY(1);
        }
      }

      /* Mobile optimizations */
      @media (max-width: 768px) {
        .hud-corner {
          width: 30px;
          height: 30px;
        }

        .status-bar {
          font-size: 10px;
          padding: 5px 15px;
        }

        .side-panel {
          height: 100px;
        }

        .panel-line {
          height: 25px;
        }
      }

      /* High contrast mode */
      @media (prefers-contrast: high) {
        .hud-corner,
        .status-item,
        .panel-line {
          border-color: #00ff00 !important;
          color: #00ff00 !important;
          background-color: #00ff00 !important;
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
export class CyberOverlayComponent implements OnInit {
  currentTime = '';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  private updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
}
