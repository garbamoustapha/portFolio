import { Component } from '@angular/core';
import { TitleComponent } from './title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tools-technologies',
  imports: [TitleComponent, CommonModule],
  template: `
    <div id="tools-section" class="gen_container">      <div class="tools_title">
        <app-title title="Tools & Complementary Technologies"></app-title>
      </div>
      <div class="tools_container">
        <div class="tools_grid">
          <div *ngFor="let tool of tools" class="tool_card">
            <div class="tool_header">
              <h3 class="tool_name">{{ tool.name }}</h3>
              <span class="tool_level">{{ tool.level }}%</span>
            </div>
            <div class="tool_progress_container">
              <div class="tool_progress_bar">
                <div 
                  class="tool_progress_fill" 
                  [style.width.%]="tool.level"
                  [attr.data-level]="tool.level">
                </div>
              </div>
            </div>
            <p class="tool_description">{{ tool.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .tools_title {
        width: 100%;
      }

      .gen_container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
        padding: 40px 20px;
      }

      .tools_container {
        width: 100%;
        max-width: 1200px;
        position: relative;
        z-index: 1;
      }

      .tools_grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 25px;
        justify-items: center;
        align-items: start;
        width: 100%;
        justify-content: center;
      }

      .tool_card {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        padding: 25px;
        background: rgba(27, 26, 85, 0.1);
        border-radius: 20px;
        border: 1px solid rgba(0, 255, 127, 0.2);
        box-shadow: 
          0 8px 32px rgba(0, 255, 127, 0.1),
          0 2px 8px rgba(0, 0, 0, 0.05);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(5px);
      }

      .tool_card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #00ff7f, #00bfff, #8a2be2);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .tool_card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 
          0 16px 48px rgba(0, 255, 127, 0.2),
          0 8px 24px rgba(138, 43, 226, 0.1),
          0 4px 12px rgba(0, 0, 0, 0.1);
        border-color: rgba(0, 255, 127, 0.4);
      }

      .tool_card:hover::before {
        opacity: 1;
      }

      .tool_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
      }

      .tool_name {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
        letter-spacing: 0.5px;
        flex: 1;
      }

      .tool_level {
        font-size: 16px;
        font-weight: bold;
        color: #00ff7f;
        background: rgba(0, 255, 127, 0.1);
        padding: 4px 12px;
        border-radius: 20px;
        border: 1px solid rgba(0, 255, 127, 0.3);
        min-width: 50px;
        text-align: center;
      }

      .tool_progress_container {
        margin-bottom: 15px;
      }

      .tool_progress_bar {
        width: 100%;
        height: 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        overflow: hidden;
        position: relative;
      }

      .tool_progress_fill {
        height: 100%;
        background: linear-gradient(90deg, #00ff7f, #00bfff);
        border-radius: 10px;
        transition: width 1.5s ease-in-out;
        position: relative;
        overflow: hidden;
      }

      .tool_progress_fill::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        animation: shimmer 2s infinite;
      }

      @keyframes shimmer {
        0% {
          left: -100%;
        }
        100% {
          left: 100%;
        }
      }

      .tool_description {
        margin: 0;
        font-size: 14px;
        color: #9290c3;
        line-height: 1.5;
        font-weight: 400;
      }

      /* High level styling */
      .tool_card:has(.tool_progress_fill[data-level="85"]) .tool_level,
      .tool_card:has(.tool_progress_fill[data-level="80"]) .tool_level {
        color: #00ff7f;
        background: rgba(0, 255, 127, 0.15);
        border-color: rgba(0, 255, 127, 0.4);
      }

      /* Medium level styling */
      .tool_card:has(.tool_progress_fill[data-level="75"]) .tool_level,
      .tool_card:has(.tool_progress_fill[data-level="70"]) .tool_level {
        color: #00bfff;
        background: rgba(0, 191, 255, 0.15);
        border-color: rgba(0, 191, 255, 0.4);
      }

      /* Responsive styles */
      @media (min-width: 1400px) {
        .gen_container {
          padding: 60px 40px;
        }

        .tools_grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 1400px;
        }

        .tool_card {
          max-width: 420px;
        }

        .tool_name {
          font-size: 20px;
        }

        .tool_description {
          font-size: 15px;
        }
      }

      @media (min-width: 1200px) and (max-width: 1399px) {
        .gen_container {
          padding: 50px 30px;
        }

        .tools_grid {
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 35px;
        }

        .tool_name {
          font-size: 19px;
        }

        .tool_description {
          font-size: 14px;
        }
      }

      @media (max-width: 1199px) and (min-width: 769px) {
        .gen_container {
          padding: 45px 25px;
        }

        .tools_grid {
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .tool_card {
          max-width: 380px;
        }

        .tool_name {
          font-size: 18px;
        }

        .tool_description {
          font-size: 14px;
        }
      }

      @media (max-width: 768px) and (min-width: 481px) {
        .gen_container {
          padding: 35px 15px;
        }

        .tools_grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .tool_card {
          padding: 20px;
          max-width: none;
        }

        .tool_name {
          font-size: 16px;
        }

        .tool_level {
          font-size: 14px;
          padding: 3px 10px;
        }

        .tool_description {
          font-size: 13px;
        }
      }

      @media (max-width: 480px) and (min-width: 381px) {
        .gen_container {
          padding: 30px 12px;
        }

        .tools_grid {
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .tool_card {
          padding: 18px;
          max-width: none;
        }

        .tool_name {
          font-size: 15px;
        }

        .tool_level {
          font-size: 13px;
          padding: 2px 8px;
        }

        .tool_description {
          font-size: 12px;
        }
      }

      @media (max-width: 380px) {
        .gen_container {
          padding: 25px 10px;
        }

        .tools_grid {
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .tool_card {
          padding: 15px;
          max-width: none;
        }

        .tool_name {
          font-size: 14px;
        }

        .tool_level {
          font-size: 12px;
          padding: 2px 6px;
        }

        .tool_description {
          font-size: 11px;
        }
      }
    `,
  ],
})
export class ToolsTechnologiesComponent {  tools = [
    {
      name: 'Git / GitHub / GitLab',
      level: 85,
      description: 'Version control, branch management, merge, CI/CD and team collaboration.'
    },
    {
      name: 'Linux / Bash',
      level: 75,
      description: 'Application deployment, automation scripts, SSH administration.'
    },
    {
      name: 'Docker / Docker Compose',
      level: 70,
      description: 'Containerization of development and production environments.'
    },
    {
      name: 'Swagger / Postman',
      level: 80,
      description: 'REST API testing and documentation, endpoint validation.'
    },
    {
      name: 'JWT / SMTP / OAuth',
      level: 75,
      description: 'Email sending, contact form integration, authentication.'
    },
    {
      name: 'SQL Server / MySQL',
      level: 70,
      description: 'Relational databases, complex queries, optimization.'
    }
  ];
}