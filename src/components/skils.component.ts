import { Component } from "@angular/core";
import { TitleComponent } from "./title.component";
import { SkilsChartComponent } from "./skilsChart.Component";
@Component({
  selector: "app-skills",
  imports: [TitleComponent, SkilsChartComponent],
  template: `
    <div id="skills-section" class="gen_container">
      <app-title title="Skills"></app-title>
      <div class="skills_container">
          <skils-chart></skils-chart>    
      </div>
    </div>
  `,
  styles: [`
    .gen_container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
      width: 100%;
      }
      .skills_container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
      }`
      ]
})
export class SkillsComponent {

}