import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: ` <div class="aboutme_container_title">
    <h1 style="z-index: 12;">{{ title }}</h1>
    <h1 style="z-index: 19;text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);">
      {{ title }}
    </h1>
  </div>`,
  styles: [
    `
      .aboutme_container_title {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        align-items: center;
        position: relative;
        height: auto;
        min-height: 100px;
        overflow: visible;
        padding: 20px 0;
      }
      .aboutme_container_title :nth-child(1) {
        position: absolute;
        font-size: 80px;
        color: rgba(83, 92, 145, 0.46);
        z-index: 1;
        margin: 0;
        text-align: center;
        white-space: nowrap;
        width: 100%;
        line-height: 1;
      }
      .aboutme_container_title :nth-child(2) {
        position: relative;
        font-size: 40px;
        color: white;
        z-index: 2;
        margin: 0;
        text-align: center;
        font-weight: bold;
      }

      /* Responsive Styles */
      /* Large screens (Desktop) */
      @media (min-width: 1200px) {
        .aboutme_container_title {
          min-height: 120px;
          padding: 30px 0;
        }
        .aboutme_container_title :nth-child(1) {
          font-size: 100px;
        }
        .aboutme_container_title :nth-child(2) {
          font-size: 50px;
        }
      } /* Medium screens (Tablets) */
      @media (max-width: 1199px) and (min-width: 769px) {
        .aboutme_container_title {
          margin-bottom: 15px;
          min-height: 85px;
          padding: 20px 0;
        }
        .aboutme_container_title :nth-child(1) {
          font-size: 70px;
        }
        .aboutme_container_title :nth-child(2) {
          font-size: 35px;
        }
      } /* Small tablets and large phones */
      @media (max-width: 768px) {
        .aboutme_container_title {
          margin-bottom: 15px;
          padding: 15px 10px;
          min-height: 65px;
        }
        .aboutme_container_title :nth-child(1) {
          font-size: 50px;
        }
        .aboutme_container_title :nth-child(2) {
          font-size: 25px;
        }
      } /* Mobile phones */
      @media (max-width: 480px) {
        .aboutme_container_title {
          margin-bottom: 10px;
          padding: 10px 5px;
          min-height: 50px;
        }
        .aboutme_container_title :nth-child(1) {
          font-size: 35px;
        }
        .aboutme_container_title :nth-child(2) {
          font-size: 18px;
        }
      } /* Very small screens */
      @media (max-width: 320px) {
        .aboutme_container_title {
          margin-bottom: 8px;
          min-height: 40px;
          padding: 8px 0;
        }
        .aboutme_container_title :nth-child(1) {
          font-size: 28px;
        }
        .aboutme_container_title :nth-child(2) {
          font-size: 14px;
        }
      } /* Portrait orientation adjustments */
      @media (orientation: portrait) and (max-width: 768px) {
        .aboutme_container_title {
          padding: 15px 10px;
        }
        .aboutme_container_title :nth-child(1) {
          white-space: normal;
          word-break: break-word;
          line-height: 0.9;
        }
        .aboutme_container_title :nth-child(2) {
          white-space: normal;
          word-break: break-word;
          line-height: 1.2;
        }
      } /* Landscape orientation on mobile */
      @media (orientation: landscape) and (max-height: 600px) {
        .aboutme_container_title {
          margin-bottom: 5px;
          min-height: 35px;
          padding: 5px 0;
        }
        .aboutme_container_title :nth-child(1) {
          font-size: 30px;
        }
        .aboutme_container_title :nth-child(2) {
          font-size: 16px;
        }
      }
    `,
  ],
})
export class TitleComponent {
  @Input() title: string = '';
}
