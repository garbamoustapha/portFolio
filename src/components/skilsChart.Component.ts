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

  
  skills = [
    {
      name: "C# / .NET",
      level: 95, // Très utilisé dans vos projets, en particulier .NET MAUI, Blazor et SignalR.
    },
    {
      name: "PostgreSQL",
      level: 90, // Base de données principale pour vos projets Blazor.
    },
    {
      name: "Blazor",
      level: 85, // Framework que vous utilisez activement pour des projets web et e-commerce.
    },
    {
      name: "JavaScript",
      level: 80, // Connaissances avancées pour les projets frontend.
    },
    {
      name: "Entity Framework",
      level: 80, // Utilisé pour la gestion des données dans vos projets avec PostgreSQL.
    },
    {
      name: "Angular",
      level: 75, // Framework utilisé pour des composants et des interfaces utilisateur.
    },
    {
      name: "HTML / CSS",
      level: 75, // Solide compréhension pour créer des interfaces utilisateur.
    },
    {
      name: "Java",
      level: 70, // Utilisé dans des projets passés, notamment pour la surveillance des applications.
    },
    {
      name: "SignalR",
      level: 70, // Utilisé pour l'implémentation de flux vidéo et de communication en temps réel.
    },
    {
      name: "AI / Weka",
      level: 65, // Connaissances appliquées en intelligence artificielle et data mining.
    },
    {
      name: "MAUI",
      level: 80, // Expérience mentionnée, mais moins utilisée.
    },
    {
      name: "Unity",
      level: 40, // Débutant en développement de jeux.
    },
  ];
  
}