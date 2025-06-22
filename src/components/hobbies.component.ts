import { Component } from '@angular/core';
import { TitleComponent } from './title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  imports: [TitleComponent, CommonModule],
  template: `
    <div id="hobbies-section" class="gen_container">
      <div class="hobbies_title">
        <app-title title="Hobbies & Interests"></app-title>
      </div>
      <div class="hobbies_container">
        <div class="hobbies_grid">
          <div *ngFor="let hobby of hobbies" class="hobby_card">
            <div class="hobby_icon">
              {{ hobby.icon }}
            </div>
            <div class="hobby_content">
              <h3 class="hobby_title">{{ hobby.name }}</h3>
              <p class="hobby_description">{{ hobby.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .hobbies_title {
        width: 100%;
      }
      .gen_container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
      }

      .hobbies_container {
        width: 100%;
        max-width: 1200px;
        position: relative;
        z-index: 1;
      }
      .hobbies_grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 25px;
        justify-items: center;
        align-items: start;
        width: 100%;
        justify-content: center;
      }
      .hobby_card {
        display: flex;
        align-items: flex-start;
        width: 100%;
        max-width: 350px;
        padding: 20px;

        border-radius: 20px;
        border: 1px solid rgba(146, 144, 195, 0.15);
        box-shadow: 0 8px 32px rgba(146, 144, 195, 0.12),
          0 2px 8px rgba(0, 0, 0, 0.04);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(10px);
      }

      .hobby_card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;

        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .hobby_card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 16px 48px rgba(146, 144, 195, 0.2),
          0 8px 24px rgba(247, 147, 30, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
        border-color: rgba(146, 144, 195, 0.3);
      }

      .hobby_card:hover::before {
        opacity: 1;
      }

      .hobby_icon {
        font-size: 2.5rem;
        margin-right: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 60px;
        height: 60px;
        background: linear-gradient(
          135deg,
          rgba(146, 144, 195, 0.1),
          rgba(247, 147, 30, 0.1)
        );
        border-radius: 15px;
        transition: transform 0.3s ease;
      }

      .hobby_card:hover .hobby_icon {
        transform: scale(1.1) rotate(5deg);
      }

      .hobby_content {
        flex: 1;
      }

      .hobby_title {
        margin: 0 0 8px 0;
        font-size: 18px;
        font-weight: 600;
        color: #9290c3;
        letter-spacing: 0.5px;
      }

      .hobby_description {
        margin: 0;
        font-size: 14px;
        color: #666;
        line-height: 1.5;
        font-weight: 400;
      } /* Responsive styles */
      /* Extra Large screens (Desktop > 1400px) */
      @media (min-width: 1400px) {
        .gen_container {
          padding: 60px 40px;
        }

        .hobbies_grid {
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          max-width: 1400px;
        }

        .hobby_card {
          max-width: 320px;
        }

        .hobby_title {
          font-size: 20px;
        }

        .hobby_description {
          font-size: 15px;
        }

        .hobby_icon {
          font-size: 3rem;
          min-width: 70px;
          height: 70px;
        }
      }

      /* Large screens (Desktop 1200px-1399px) */
      @media (min-width: 1200px) and (max-width: 1399px) {
        .gen_container {
          padding: 50px 30px;
        }

        .hobbies_grid {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 35px;
        }

        .hobby_title {
          font-size: 19px;
        }

        .hobby_description {
          font-size: 14px;
        }

        .hobby_icon {
          font-size: 2.8rem;
          min-width: 65px;
          height: 65px;
        }
      }

      /* Medium screens (Tablets 769px-1199px) */
      @media (max-width: 1199px) and (min-width: 769px) {
        .gen_container {
          padding: 45px 25px;
        }

        .hobbies_grid {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .hobby_card {
          max-width: 340px;
        }

        .hobby_title {
          font-size: 18px;
        }

        .hobby_description {
          font-size: 14px;
        }

        .hobby_icon {
          font-size: 2.5rem;
          min-width: 60px;
          height: 60px;
        }
      } /* Small tablets (481px-768px) - 2 columns */
      @media (max-width: 768px) and (min-width: 481px) {
        .gen_container {
          padding: 35px 15px;
        }

        .hobbies_grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .hobby_card {
          padding: 18px;
          max-width: none;
          flex-direction: column;
          text-align: center;
        }

        .hobby_card .hobby_icon {
          margin-right: 0;
          margin-bottom: 10px;
          align-self: center;
        }

        .hobby_content {
          width: 100%;
        }

        .hobby_title {
          font-size: 17px;
          margin-bottom: 12px;
        }

        .hobby_description {
          font-size: 13px;
        }

        .hobby_icon {
          font-size: 2.2rem;
          min-width: 55px;
          height: 55px;
        }
      } /* Mobile Large (381px-480px) - 2 columns */
      @media (max-width: 480px) and (min-width: 381px) {
        .gen_container {
          padding: 30px 12px;
        }

        .hobbies_grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .hobby_card {
          padding: 15px;
          max-width: none;
          flex-direction: column;
          text-align: center;
        }

        .hobby_card .hobby_icon {
          margin-right: 0;
          margin-bottom: 8px;
          align-self: center;
        }

        .hobby_content {
          width: 100%;
        }

        .hobby_title {
          font-size: 15px;
          margin-bottom: 10px;
        }

        .hobby_description {
          font-size: 12px;
        }

        .hobby_icon {
          font-size: 1.9rem;
          min-width: 45px;
          height: 45px;
        }
      } /* Mobile Medium (321px-380px) - 1 column */
      @media (max-width: 380px) and (min-width: 321px) {
        .gen_container {
          padding: 25px 10px;
        }

        .hobbies_grid {
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .hobby_card {
          padding: 15px;
          max-width: none;
          flex-direction: column;
          text-align: center;
        }

        .hobby_card .hobby_icon {
          margin-right: 0;
          margin-bottom: 8px;
          align-self: center;
        }

        .hobby_content {
          width: 100%;
        }

        .hobby_title {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .hobby_description {
          font-size: 12px;
        }

        .hobby_icon {
          font-size: 2rem;
          min-width: 50px;
          height: 50px;
        }
      } /* Mobile Small (≤320px) - 1 column */
      @media (max-width: 320px) {
        .gen_container {
          padding: 20px 8px;
        }

        .hobbies_grid {
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .hobby_card {
          padding: 12px;
          max-width: none;
          flex-direction: column;
          text-align: center;
        }

        .hobby_card .hobby_icon {
          margin-right: 0;
          margin-bottom: 8px;
          align-self: center;
        }

        .hobby_content {
          width: 100%;
        }

        .hobby_title {
          font-size: 15px;
          margin-bottom: 8px;
        }

        .hobby_description {
          font-size: 11px;
        }

        .hobby_icon {
          font-size: 1.8rem;
          min-width: 45px;
          height: 45px;
        }
      }
    `,
  ],
})
export class HobbiesComponent {
  hobbies = [
    {
      icon: '💻',
      name: 'Programming',
      description:
        'Passionate about coding, exploring new technologies, and building innovative solutions.',
    },
    {
      icon: '🎮',
      name: 'Gaming',
      description:
        'Enjoy strategic and adventure games, especially those that challenge problem-solving skills.',
    },
    {
      icon: '📚',
      name: 'Reading',
      description:
        'Love reading tech blogs, programming books, and staying updated with industry trends.',
    },
    {
      icon: '🏃‍♂️',
      name: 'Fitness',
      description:
        'Regular exercise, outdoor activities, and playing football to maintain a healthy work-life balance.',
    },
    {
      icon: '🎵',
      name: 'Music',
      description:
        'Listening to various genres of music, especially while coding or during creative sessions.',
    },
    {
      icon: '📱',
      name: 'Tech Gadgets',
      description:
        'Exploring the latest technology trends, gadgets, and innovative digital solutions.',
    },
    {
      icon: '🎨',
      name: 'Design',
      description:
        'Interest in UI/UX design, creating beautiful and functional user interfaces.',
    },
    {
      icon: '♟️',
      name: 'Playing Chess',
      description:
        'Strategic thinking and problem-solving through chess games, enhancing analytical skills.',
    },
  ];
}
