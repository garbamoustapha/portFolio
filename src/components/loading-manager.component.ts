import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-manager',
  template: `
    <div class="loading-overlay" [class.hidden]="!isLoading">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <div class="loading-text">{{ loadingText }}</div>
        <div class="loading-progress">
          <div class="progress-bar" [style.width.%]="progress"></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
      }

      .loading-overlay.hidden {
        opacity: 0;
        pointer-events: none;
      }

      .loading-content {
        text-align: center;
        color: #00ff7f;
        font-family: 'Orbitron', monospace;
      }

      .loading-spinner {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(0, 255, 127, 0.3);
        border-top: 3px solid #00ff7f;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .loading-text {
        font-size: 18px;
        margin-bottom: 20px;
        text-shadow: 0 0 10px #00ff7f;
      }

      .loading-progress {
        width: 200px;
        height: 4px;
        background: rgba(0, 255, 127, 0.2);
        border-radius: 2px;
        overflow: hidden;
        margin: 0 auto;
      }

      .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #00ff7f, #00ffff);
        transition: width 0.3s ease;
        box-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
      }
    `,
  ],
})
export class LoadingManagerComponent implements OnInit {
  isLoading = true;
  progress = 0;
  loadingText = 'Initializing Gaming Experience...';

  private loadingSteps = [
    'Loading Three.js Engine...',
    'Initializing Matrix Rain...',
    'Creating Gaming Particles...',
    'Setting up Cyber Interface...',
    'Optimizing Performance...',
    'Ready',
  ];

  ngOnInit() {
    this.simulateLoading();
  }

  private async simulateLoading() {
    for (let i = 0; i < this.loadingSteps.length; i++) {
      this.loadingText = this.loadingSteps[i];
      this.progress = ((i + 1) / this.loadingSteps.length) * 100;

      await this.delay(500);
    }

    // Wait a bit more to ensure all components are loaded
    await this.delay(1000);
    this.isLoading = false;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
