import { Component, Input } from "@angular/core";

@Component({
  selector: 'about-me-experience-card',
  template: `
      <div class="aboutme_container_data_info">
        <h1 class="value text_color_deg" style="font-size: 40px;">{{data.value}}+</h1>
        <h5 style="color: #9290C3;" class="title">{{data.title}}</h5>
      </div>
  `,
  styles:[`
      .aboutme_container_data_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 5px 25px;
        border: 1px solid rgba(146, 144, 195, 0.21);
        background-color:rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        min-width: 150px;
        margin: 10px;
      }
    
      .value{
        font-weight: bold;
      }
    `]
})
export class AboutMeExperienceCardComponent {
  @Input() data: {title: string, value: number} = {title: "", value: 0};

}