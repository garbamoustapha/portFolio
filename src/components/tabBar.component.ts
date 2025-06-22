import { Component } from '@angular/core';

@Component({
  selector: 'tab-bar',
  template: `
    <nav class="tab-bar">
      <div class="header">
        <h1 id="title">Garba Moustapha</h1>
        <button
          class="burger-menu"
          (click)="toggleMenu()"
          [class.active]="isMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul [class.show]="isMenuOpen">
        @for(item of tabElements; track item.label) {
        <li
          [class.active]="item === activeTab"
          (click)="scrollToSection(item.target)"
        >
          {{ item.label }}
        </li>
        }
      </ul>
    </nav>
  `,
  styles: [
    `
      .tab-bar {
  background-color: #1b1a552A;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 20px;
      }
      .header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
      }

      #title {
        background: linear-gradient(90deg, rgb(228, 130, 19), rgb(236, 9, 9));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 24px;
        text-align: center;
        margin-bottom: 10px;
        margin: 0;
      }
      .burger-menu {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        flex-direction: column;
        gap: 4px;
        padding: 5px;
        position: absolute;
        right: 0;
      }

      .burger-menu span {
        width: 25px;
        height: 3px;
        background-color: white;
        transition: all 0.3s ease;
        border-radius: 2px;
      }

      .burger-menu.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .burger-menu.active span:nth-child(2) {
        opacity: 0;
      }

      .burger-menu.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }

      .tab-bar ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        margin: 0;
        list-style: none;
        width: 100%;
      }

      .tab-bar li {
        color: white;
        padding: 10px 15px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: background-color 0.3s, border-bottom 0.3s;
        text-align: center;
      }

      .tab-bar li:hover {
        background-color: #292872;
      }

      .tab-bar li.active {
        font-weight: bold;
        border-bottom: 2px solid #9290c3;
      }

      /* Responsive Styles */
      @media (max-width: 768px) {
        .header {
          margin-bottom: 0;
        }
        #c {
          font-size: 20px;
          margin-bottom: 0;
        }

        .burger-menu {
          display: flex;
        }

        .tab-bar ul {
          flex-direction: column;
          align-items: center;
          gap: 5px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          width: 100%;
          margin-top: 10px;
        }

        .tab-bar ul.show {
          max-height: 300px;
        }

        .tab-bar li {
          padding: 8px 10px;
          font-size: 14px;
          width: 100%;
          text-align: center;
        }
      }

      @media (max-width: 480px) {
        #c {
          font-size: 18px;
        }

        .tab-bar li {
          padding: 6px 8px;
          font-size: 12px;
        }
      }

      @media (min-width: 769px) {
        .tab-bar ul {
          display: flex !important;
        }
      }
    `,
  ],
})
export class TabBarComponent {
  tabElements = [
    { label: 'Home', target: 'home-section' },
    { label: 'About Me', target: 'aboutme-section' },
    { label: 'Skills', target: 'skills-section' },
    { label: 'Hobbies', target: 'hobbies-section' },
    { label: 'Experience & Education', target: 'experience-section' },
    { label: 'Contact', target: 'contact-section' },
  ];

  activeTab = this.tabElements[0];
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(targetId: string): void {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    this.activeTab =
      this.tabElements.find((tab) => tab.target === targetId) || this.activeTab;
    // Fermer le menu après sélection sur mobile
    this.isMenuOpen = false;
  }
}
