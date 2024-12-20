import { Component } from '@angular/core';

@Component({
  selector: 'tab-bar',
  template: `
    <nav class="tab-bar">
      <h1 id="title">Garba</h1>
      <ul>
        @for(item of tabElements; track item.label) {
          <li      
          [class.active]="item === activeTab"
          (click)="selectTab(item)"
          >
            {{ item.label }}
          </li>
        }      
      </ul>
    </nav> 
  `,
  styles: [  `

    .tab-bar {
      background-color: #1B1A55;
      border-radius: 10px;
    }

    #title{
      background: linear-gradient(90deg,rgb(228, 130, 19),rgb(236, 9, 9));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      align-self: center ;
      font-size: 40px;
    }
      .tab-bar,  .tab-bar ul{
        display: flex;
        justify-content: space-around;
        padding: 5px 0;
        margin: 0;
      }

      .tab-bar ul{
        flex: 0.4;
        list-style: none;
      }
     

      .tab-bar li {
        color: white;
        padding: 10px 20px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: background-color 0.3s, border-bottom 0.3s;
      }

      .tab-bar li:hover {
        background-color: #1B1A55;
      }

      .tab-bar li.active {
        font-weight: bold;
        border-bottom: 2px solid #9290C3;       
      }
    `,
  ],
})
export class TabBarComponent {
  tabElements = [
    { label: 'Home', content: 'Content for Tab 1' },
    { label: 'About me', content: 'Content for Tab 2' },
    { label: 'Skills', content: 'Content for Tab 3' },
  ];

  activeTab = this.tabElements[0]; // Définit le premier onglet actif par défaut.

  selectTab(tab: { label: string; content: string }) {
    this.activeTab = tab;
  }
}
