import { Component } from '@angular/core';
import { AboutMeExperienceCardComponent } from './aboutmeExperienceCard.component';
import { TitleComponent } from './title.component';

@Component({
  selector: 'app-aboutme',
  imports: [AboutMeExperienceCardComponent, TitleComponent],
  template: `
    <div id="aboutme-section" class="aboutme_container">
      <!-- Section Titre et Description -->
      <div>
        <app-title [title]="'About Me'"></app-title>
        <p style="color: #9290C3">
          Hello! I'm Garba Moustapha, a dedicated software developer with a
          passion for creating impactful solutions. I specialize in Full Stack
          Development for desktop, web, and mobile applications. Beyond coding,
          I enjoy exploring robotics, AI, and engaging in creative projects that
          inspire innovation.
        </p>
      </div>

      <!-- Informations personnelles et expériences -->
      <div class="aboutme_container_data">
        <!-- Infos personnelles -->
        <div class="aboutme_container_data_info" style="margin-top: 20px;">
          <app-title [title]="'Personal Info'"></app-title>

          <div class="personal-info-grid">
            <div class="info-column">
              <p class="item">
                First Name: <span style="color: #9290C3;">Garba</span>
              </p>
              <p class="item">Age: <span style="color: #9290C3;">23</span></p>
              <p class="item">
                Location: <span style="color: #9290C3;">Niamey, Niger</span>
              </p>
              <p class="item">
                Email:
                <a
                  href="mailto:garbamoustapha0@gmail.com"
                  style="color: #9290C3;"
                  >{{ 'garbamoustapha0@gmail.com' }}</a
                >
              </p>
            </div>
            <div class="info-column">
              <p class="item">
                Last Name: <span style="color: #9290C3;">Moustapha</span>
              </p>
              <p class="item">
                Phone: <span style="color: #9290C3;">+227 80 47 48 25</span>
              </p>
              <p class="item">
                Nationality: <span style="color: #9290C3;">Nigerien</span>
              </p>
              <p class="item">
                GitHub:
                <a
                  href="https://github.com/GarbaMoustapha"
                  style="color: #9290C3;"
                  >GarbaMoustapha</a
                >
              </p>
              <p class="item">
                LinkedIn:
                <a
                  href="https://www.linkedin.com/in/moustapha-garba-050b93264"
                  style="color: #9290C3;"
                  target="_blank"
                  >Moustapha Garba</a
                >
              </p>
            </div>
          </div>
        </div>

        <!-- Statistiques d'expérience -->
        <div class="aboutme_container_data_experience">
          <about-me-experience-card
            [data]="{ title: 'Years of Experience', value: 2 }"
          ></about-me-experience-card>
          <about-me-experience-card
            [data]="{ title: 'Projects Completed', value: 5 }"
          ></about-me-experience-card>
          <about-me-experience-card
            [data]="{ title: 'Technologies Used', value: 10 }"
          ></about-me-experience-card>
        </div>
      </div>

      <!-- Bouton Download CV en bas -->
      <div class="download-cv-container">
        <a href="Garba_Moustapha_CV.pdf" download>
          <button class="button" style="width: 150px;">Download CV</button>
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      a {
        text-decoration: none;
      }

      p {
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 15px;
      }

      h5 {
        font-size: 28px;
        margin-bottom: 10px;
        color: #fff;
      }

      .aboutme_container_title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
      }
      .aboutme_container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px;
        background-color: #1b1a55;
        margin-top: 30px;
        border-radius: 10px;
        color: white;
        box-sizing: border-box;
      }

      .aboutme_container_data {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
      }

      .aboutme_container_data_info {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        margin-bottom: 20px;
        justify-content: space-evenly;
      }

      .aboutme_container_data_info > * {
        margin-bottom: 20px;
      }
      .aboutme_container_data_info > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
      }

      .personal-info-grid {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
      }

      .info-column {
        flex: 1;
        min-width: 250px;
      }

      .download-cv-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }

      .aboutme_container_data_info > div > div {
        flex: 1;
        min-width: 250px;
      }
      .aboutme_container_data_experience {
        display: flex;
        flex-basis: 100%;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 10px;
        width: 100%;
        gap: 15px;
      }

      .item {
        margin-bottom: 10px;
      }

      .button {
        background: linear-gradient(90deg, rgb(228, 130, 19), rgb(236, 9, 9));
        color: white;
        border: none;
        border-radius: 8px;
        padding: 12px 20px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
        margin: 0 auto;
        display: block;
      }

      .button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      /* Responsive Styles */

      /* Large screens (Desktop) */
      @media (min-width: 1200px) {
        .aboutme_container {
          padding: 30px;
        }

        .aboutme_container_data {
          flex-direction: row;
        }

        .aboutme_container_data_info {
          flex-basis: 65%;
          margin-right: 20px;
        }

        .aboutme_container_data_experience {
          flex-basis: 30%;
          flex-direction: column;
          margin-top: 0;
        }
      }

      /* Medium screens (Tablets) */
      @media (max-width: 1199px) and (min-width: 769px) {
        .aboutme_container {
          padding: 25px;
        }

        .aboutme_container_data_info > div {
          justify-content: space-around;
        }

        .aboutme_container_data_info > div > div {
          min-width: 300px;
        }
      } /* Small tablets and large phones */
      @media (max-width: 768px) {
        .aboutme_container {
          padding: 20px 15px;
          margin-top: 20px;
        }

        .aboutme_container_data_info h5 {
          font-size: 24px !important;
        }

        .personal-info-grid {
          flex-direction: column;
          gap: 15px;
        }

        .info-column {
          min-width: auto;
          margin-left: 0 !important;
        }

        .aboutme_container_data_info > div {
          flex-direction: column;
          gap: 15px;
        }

        .aboutme_container_data_info > div > div {
          min-width: auto;
          margin-left: 0 !important;
        }
        .aboutme_container_data_experience {
          justify-content: space-around;
          gap: 10px;
          margin-top: 15px;
        }

        /* Force 2 cards per line on medium mobile screens */
        .aboutme_container_data_experience about-me-experience-card {
          flex: 0 1 calc(50% - 5px);
          min-width: 140px;
          max-width: 180px;
        }

        .button {
          width: 100% !important;
          max-width: 200px;
          margin: 10px auto;
        }
      }

      /* Mobile phones */
      @media (max-width: 480px) {
        .aboutme_container {
          padding: 15px 10px;
          margin-top: 15px;
        }

        .aboutme_container_data_info h5 {
          font-size: 20px !important;
          margin-bottom: 15px;
        }

        .item {
          font-size: 14px;
          margin-bottom: 8px;
        }
        .aboutme_container_data_experience {
          gap: 8px;
          margin-top: 12px;
          justify-content: center;
        }

        /* Force 2 cards per line on small mobile screens */
        .aboutme_container_data_experience about-me-experience-card {
          flex: 0 1 calc(50% - 4px);
          min-width: 120px;
          max-width: 150px;
        }

        .button {
          font-size: 14px;
          padding: 10px 16px;
        }

        p {
          font-size: 14px;
          line-height: 1.5;
        }
      } /* Very small screens */
      @media (max-width: 320px) {
        .aboutme_container {
          padding: 10px 8px;
        }

        .aboutme_container_data_info h5 {
          font-size: 18px !important;
        }

        .item {
          font-size: 12px;
        }

        .button {
          font-size: 12px;
          padding: 8px 12px;
        }

        p {
          font-size: 12px;
        }

        .aboutme_container_data_experience {
          gap: 6px;
          margin-top: 10px;
          justify-content: center;
        }

        /* Maintain 2 cards per line even on very small screens */
        .aboutme_container_data_experience about-me-experience-card {
          flex: 0 1 calc(50% - 3px);
          min-width: 100px;
          max-width: 130px;
        }
      }

      /* Additional responsive rules for experience cards */
      @media (max-width: 600px) {
        .aboutme_container_data_experience {
          justify-content: space-evenly;
        }
      }

      @media (max-width: 400px) {
        .aboutme_container_data_experience {
          justify-content: center;
        }

        .aboutme_container_data_experience about-me-experience-card {
          margin: 3px;
        }
      }
    `,
  ],
})
export class AboutMeComponent {}
