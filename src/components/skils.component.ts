import { Component } from '@angular/core';
import { TitleComponent } from './title.component';
import { SkilsChartComponent } from './skilsChart.Component';
@Component({
  selector: 'app-skills',
  imports: [TitleComponent, SkilsChartComponent],
  template: `
    <div id="skills-section" class="gen_container">
      <div style="width: 100%">
        <app-title title="Skills"></app-title>
      </div>
      <div class="skills_container">
        <skils-chart></skils-chart>
      </div>
    </div>
  `,
  styles: [
    `
      .gen_container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
        padding: 20px;
      }

      .skills_container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        gap: 20px;
      }

      /* Ensure skils-chart takes full width */
      .skills_container skils-chart {
        width: 100%;
      }

      /* Large screens (Desktop > 1200px) */
      @media (min-width: 1200px) {
        .gen_container {
          padding: 30px;
        }

        .skills_container {
          gap: 30px;
        }
      }

      /* Medium screens (Tablets 769px-1199px) */
      @media (max-width: 1199px) and (min-width: 769px) {
        .gen_container {
          padding: 25px;
        }

        .skills_container {
          gap: 25px;
        }
      }

      /* Mobile Medium (481px-768px) */
      @media (max-width: 768px) and (min-width: 481px) {
        .gen_container {
          padding: 20px 15px;
        }

        .skills_container {
          gap: 15px;
        }
      }

      /* Mobile Small (321px-480px) */
      @media (max-width: 480px) and (min-width: 321px) {
        .gen_container {
          padding: 15px 10px;
        }

        .skills_container {
          gap: 12px;
        }
      }

      /* Very small screens (≤320px) */
      @media (max-width: 320px) {
        .gen_container {
          padding: 10px 8px;
        }

        .skills_container {
          gap: 8px;
        }
      }
    `,
  ],
})
export class SkillsComponent {}
