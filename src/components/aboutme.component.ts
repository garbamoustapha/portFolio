import { Component } from "@angular/core";
import { AboutMeExperienceCardComponent } from "./aboutmeExperienceCard.component";
import { TitleComponent } from "./title.component";

@Component({
  selector: 'app-aboutme',
  imports: [AboutMeExperienceCardComponent, TitleComponent],
  template: `
    <div class="aboutme_container">
      <div>
        <app-title [title]="'About Me'" ></app-title>
        <p style="color : #9290C3">Hi, I'm a software developer with a passion for creating innovative solutions. I have experience in a variety of programming languages and frameworks, and I'm always looking for new challenges to tackle. When I'm not coding, you can find me exploring the outdoors or spending time with my family and friends.</p>
      </div>
      <div class="aboutme_container_data">
        <div class="aboutme_container_data_info" style="margin-top: 20px;">
          <h5 class="item" style="font-size: 30px;">Personal infos</h5>
          <div>
            <div>
              <p class="item">First Name: <span style="color: #9290C3;">Garba</span></p>
              <p class="item">Age:  <span style="color: #9290C3;">25</span></p>
              <p class="item">Location:  <span style="color: #9290C3;">Niamey, Niger</span></p>
              <p class="item">Email: <a href="mailto:garbarmoustapha@gmail.com" style="color: #9290C3;">{{'garbarmoustapha@gmail.com'}}</a></p>
            </div>
            <div style="margin-left: 20px;">
              <p class="item">Last Name:  <span style="color: #9290C3;">Moustapha </span></p>
              <p class="item">Phone:  <span style="color: #9290C3;">+227 93 20 50 00 </span></p>
              <p class="item">Nationality:  <span style="color: #9290C3;">Nigerien</span></p>
              <p class="item">Github: <a href="https://github.com/GarbaMoustapha" style="color: #9290C3;">{{'GarbaMoustapha'}}</a></p>
            </div>
          </div>
          <button class="item button" style="width: 150px;">Download CV</button>
        </div>
        <div class="aboutme_container_data_experience">
          <about-me-experience-card [data]="{title: 'Years of experience', value: 1}"></about-me-experience-card>
          <about-me-experience-card [data]="{title: 'Years of experience', value: 1}"></about-me-experience-card>
          <about-me-experience-card [data]="{title: 'Years of experience', value: 1}"></about-me-experience-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .aboutme_container{
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 20px;
      background-color : #1B1A55;
      margin-top: 30px;
      border-radius: 10px;
      color: white;
    }
    

    .aboutme_container_data{
      display: flex;
      justify-content: space-between;
    }

    .aboutme_container_data_info{
      display: flex;
      flex-direction: column;
      flex-basis: 50%;
    }

    .aboutme_container_data_info >* {
      margin-bottom: 20px;
    }
    .aboutme_container_data_experience{
      display: flex;
      flex-basis: 40%;
      flex-wrap: wrap;
      margin-top: 10px;
    }
    .aboutme_container_data_info>div{
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .item{
      margin-bottom: 10px;
    }
   
  `]
  
})
export class AboutMeComponent {
  
}