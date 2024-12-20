import { Component, Input} from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: any;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  responsive?: any;
  plotOptions : any;
  legend : ApexLegend
};

@Component({
  selector: "skils-chart",
  imports: [
    ChartComponent,
  ],
  template: `

  <div class="skils_container">
    @for (opt  of optionss; track $index) {
      <div class="chart_container">
        <apx-chart class="chart"
          [series]="opt.series"
          [labels]="opt.labels"
          [chart]="opt.chart"
          [plotOptions]="opt.plotOptions"
          [legend]="opt.legend"
        >
        </apx-chart>
        <p>{{opt.labels.at(-1)}}</p>
      </div>
    }
</div>
  `,
  styles: [`
      .skils_container {
        width: 100%;
        height: 100%;
      }
      .skils_container, .chart_container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
      }
      .chart_container {
       flex-direction: column;
       width: 150px;
       justify-content: center;
       margin: 10px;
      }
      .chart {
        width: 100%;
        height: 150px;
      }
    `]
})
export class SkilsChartComponent {
  
  optionss : ChartOptions[] = [];
  

  constructor(){
    this.skills.forEach((v) => {
      var options : ChartOptions  = {
        series:[100 - v.level, v.level],
        chart: {
          height: 150,
          type: "donut",
          zoom: {
            enabled: false
          }
        },
        title: {
          text: "Skills"
        },
        xaxis: {},
        labels: [ "None",v.name],
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {},
                value: {}
              }
            }
          }
        },
        legend : {
          show: false
        }
      }
    
      this.optionss.push(options);
    })
  }

  
  skills =
  [
    {
      name: "HTML",
      level: 90
    },
    {
      name: "CSS",
      level: 80
    },
    {
      name: "JavaScript",
      level: 70
    },
    {
      name: "Angular",
      level: 60
    },
    {
      name: "React",
      level: 50
    },
    {
      name: "Vue",
      level: 40
    }
  ]

}