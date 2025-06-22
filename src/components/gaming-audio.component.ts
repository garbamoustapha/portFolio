import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gaming-audio',
  template: `
    <div class="gaming-audio">
      <!-- Audio elements for gaming sounds -->
      <audio #hoverSound preload="auto">
        <source
          src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmVcGASk3O/K"
          type="audio/wav"
        />
      </audio>

      <audio #clickSound preload="auto">
        <source
          src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmVcGASk3O/K"
          type="audio/wav"
        />
      </audio>
    </div>
  `,
  styles: [
    `
      .gaming-audio {
        position: fixed;
        top: -1000px;
        left: -1000px;
        opacity: 0;
        pointer-events: none;
      }
    `,
  ],
})
export class GamingAudioComponent implements OnInit, OnDestroy {
  private isEnabled = false;
  private audioContext?: AudioContext;

  ngOnInit() {
    this.initAudio();
    this.setupEventListeners();
  }

  ngOnDestroy() {
    if (this.audioContext) {
      this.audioContext.close();
    }
  }

  private initAudio() {
    // Only enable audio after user interaction to comply with browser policies
    document.addEventListener(
      'click',
      () => {
        if (!this.isEnabled) {
          this.isEnabled = true;
          this.createAudioContext();
        }
      },
      { once: true }
    );
  }

  private createAudioContext() {
    try {
      this.audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    } catch (e) {
      console.log('Web Audio API not supported');
    }
  }

  private setupEventListeners() {
    // Hover sounds for interactive elements
    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (this.isInteractiveElement(target)) {
        this.playHoverSound();
      }
    });

    // Click sounds
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (this.isInteractiveElement(target)) {
        this.playClickSound();
      }
    });

    // Keyboard navigation sounds
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' || e.key === 'Enter' || e.key === ' ') {
        this.playNavigationSound();
      }
    });
  }

  private isInteractiveElement(element: HTMLElement): boolean {
    const interactiveTags = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'];
    const hasInteractiveClass =
      element.classList.contains('mat-mdc-card') ||
      element.classList.contains('card') ||
      element.classList.contains('hobby_card');

    return interactiveTags.includes(element.tagName) || hasInteractiveClass;
  }

  private playHoverSound() {
    if (!this.isEnabled || !this.audioContext) return;

    this.createBeep(800, 0.1, 0.02);
  }

  private playClickSound() {
    if (!this.isEnabled || !this.audioContext) return;

    this.createBeep(1200, 0.15, 0.05);
  }

  private playNavigationSound() {
    if (!this.isEnabled || !this.audioContext) return;

    this.createBeep(600, 0.2, 0.03);
  }

  private createBeep(frequency: number, duration: number, volume: number) {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(
      frequency,
      this.audioContext.currentTime
    );
    oscillator.type = 'square';

    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      volume,
      this.audioContext.currentTime + 0.01
    );
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      this.audioContext.currentTime + duration
    );

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  // Method to enable/disable audio
  public toggleAudio() {
    this.isEnabled = !this.isEnabled;

    if (this.isEnabled && !this.audioContext) {
      this.createAudioContext();
    }
  }

  // Method to check if audio is enabled
  public isAudioEnabled(): boolean {
    return this.isEnabled;
  }
}
