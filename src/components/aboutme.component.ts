import { Component } from "@angular/core";
import { AboutMeExperienceCardComponent } from "./aboutmeExperienceCard.component";
import { TitleComponent } from "./title.component";

@Component({
  selector: 'app-aboutme',
  imports: [AboutMeExperienceCardComponent, TitleComponent],
  template: `
    <div id="aboutme-section" class="aboutme_container">
      <!-- Section Titre et Description -->
      <div>
        <app-title [title]="'About Me'"></app-title>
        <p style="color: #9290C3">
          Hello! I'm Garba Moustapha, a dedicated software developer with a passion for creating impactful solutions. I specialize in Full Stack Development for desktop, web, and mobile applications. Beyond coding, I enjoy exploring robotics, AI, and engaging in creative projects that inspire innovation.
        </p>
      </div>

      <!-- Informations personnelles et expériences -->
      <div class="aboutme_container_data">
        <!-- Infos personnelles -->
        <div class="aboutme_container_data_info" style="margin-top: 20px;">
          <h5 class="item" style="font-size: 30px; justify-content: center; text-align: center;">Personal Info</h5>
          <div style="display: flex; justify-content: space-evenly;">
            <div>
              <p class="item">First Name: <span style="color: #9290C3;">Garba</span></p>
              <p class="item">Age: <span style="color: #9290C3;">23</span></p>
              <p class="item">Location: <span style="color: #9290C3;">Niamey, Niger</span></p>
              <p class="item">Email: <a href="mailto:garbamoustapha0@gmail.com" style="color: #9290C3;">{{"garbamoustapha0@gmail.com"}}</a></p>
            </div>
            <div style="margin-left: 20px;">
              <p class="item">Last Name: <span style="color: #9290C3;">Moustapha</span></p>
              <p class="item">Phone: <span style="color: #9290C3;">+227 80 47 48 25</span></p>
              <p class="item">Nationality: <span style="color: #9290C3;">Nigerien</span></p>
              <p class="item">GitHub: <a href="https://github.com/GarbaMoustapha" style="color: #9290C3;">GarbaMoustapha</a></p>
            </div>
          </div>
          <a style="justify-content: center; text-align: center;" href="Garba_Moustapha_CV.pdf" download>
            <button class="item button" style="width: 150px;">Download CV</button>
          </a>
        </div>

        <!-- Statistiques d'expérience -->
        <div class="aboutme_container_data_experience">
          <about-me-experience-card [data]="{title: 'Years of Experience', value: 2}"></about-me-experience-card>
          <about-me-experience-card [data]="{title: 'Projects Completed', value: 5}"></about-me-experience-card>
          <about-me-experience-card [data]="{title: 'Technologies Used', value: 10}"></about-me-experience-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .aboutme_container {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 20px;
      background-color: #1B1A55;
      margin-top: 30px;
      border-radius: 10px;
      color: white;
    }

    .aboutme_container_data {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
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

    .aboutme_container_data_experience {
      display: flex;
      flex-basis: 100%;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 10px;
      width: 100%;
    }

    .aboutme_container_data_info > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .item {
      margin-bottom: 10px;
    }
  `]
})
export class AboutMeComponent {}
