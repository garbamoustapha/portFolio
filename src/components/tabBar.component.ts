import { Component } from '@angular/core';

@Component({
  selector: 'tab-bar',
  template: `
    <nav class="tab-bar">
      <h1 id="title">Garba Moustapha</h1>
      <ul>
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
  styles: [`
    .tab-bar {
      background-color: #1B1A55;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 20px;
    }

    #title {
      background: linear-gradient(90deg, rgb(228, 130, 19), rgb(236, 9, 9));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 24px;
      text-align: center;
      margin-bottom: 10px;
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
      border-bottom: 2px solid #9290C3;       
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
      #title {
        font-size: 20px;
      }

      .tab-bar ul {
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }

      .tab-bar li {
        padding: 8px 10px;
        font-size: 14px;
      }
    }

    @media (max-width: 480px) {
      #title {
        font-size: 18px;
      }

      .tab-bar li {
        padding: 6px 8px;
        font-size: 12px;
      }
    }
  `],
})
export class TabBarComponent {
  tabElements = [
    { label: 'Home', target: 'home-section' },
    { label: 'About Me', target: 'aboutme-section' },
    { label: 'Skills', target: 'skills-section' },
    { label: 'Experience & Education', target: 'experience-section' },
    { label: 'Contact', target: 'contact-section' },
  ];

  activeTab = this.tabElements[0];

 scrollToSection(targetId: string): void {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    this.activeTab = this.tabElements.find(tab => tab.target === targetId) || this.activeTab;
  }
}

