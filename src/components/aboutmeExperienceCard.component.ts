import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-me-experience-card',
  template: `
    <div class="aboutme_container_data_info">
      <h1 class="value text_color_deg" style="font-size: 40px;">
        {{ data.value }}+
      </h1>
      <h5 style="color: #9290C3;" class="title">{{ data.title }}</h5>
    </div>
  `,
  styles: [
    `
      .aboutme_container_data_info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 5px 25px;
        border: 1px solid rgba(146, 144, 195, 0.21);
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        min-width: 150px;
        margin: 10px;
      }

      .value {
        font-weight: bold;
      }

      /* Large screens (Desktop > 1200px) */
      @media (min-width: 1200px) {
        .aboutme_container_data_info {
          padding: 15px 30px;
          min-width: 180px;
          margin: 15px;
        }

        .value {
          font-size: 45px !important;
        }

        .title {
          font-size: 18px !important;
        }
      }

      /* Medium screens (Tablets 769px-1199px) */
      @media (max-width: 1199px) and (min-width: 769px) {
        .aboutme_container_data_info {
          padding: 10px 25px;
          min-width: 160px;
          margin: 12px;
        }

        .value {
          font-size: 38px !important;
        }

        .title {
          font-size: 16px !important;
        }
      }

      /* Small tablets and large phones (481px-768px) */
      @media (max-width: 768px) {
        .aboutme_container_data_info {
          padding: 8px 20px;
          min-width: 140px;
          margin: 8px;
        }

        .value {
          font-size: 32px !important;
        }

        .title {
          font-size: 14px !important;
        }
      }

      /* Mobile phones (321px-480px) */
      @media (max-width: 480px) {
        .aboutme_container_data_info {
          padding: 6px 15px;
          min-width: 120px;
          margin: 6px;
        }

        .value {
          font-size: 28px !important;
        }

        .title {
          font-size: 12px !important;
        }
      }

      /* Very small screens (≤320px) */
      @media (max-width: 320px) {
        .aboutme_container_data_info {
          padding: 5px 12px;
          min-width: 100px;
          margin: 5px;
        }

        .value {
          font-size: 24px !important;
        }

        .title {
          font-size: 11px !important;
        }
      }
    `,
  ],
})
export class AboutMeExperienceCardComponent {
  @Input() data: { title: string; value: number } = { title: '', value: 0 };
}
