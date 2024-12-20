import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-title',
  template: ` <div class="aboutme_container_title">
  <h1 style="z-index: 12;">{{title}}</h1>       
  <h1 style="z-index: 19;text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);">{{title}}</h1>       
</div>`,
  styles: [`
    .aboutme_container_title{
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      align-items: center;
    }
    .aboutme_container_title :nth-child(1){
      position: absolute;   
      font-size: 80px;
      color:rgba(83, 92, 145, 0.46);
      z-index: 1;
    }
    `]
})
export class TitleComponent {
  @Input() title: string = "";
}