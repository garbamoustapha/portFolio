import { Component, Input } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: any;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  responsive?: any;
  plotOptions: any;
  legend: ApexLegend;
};

@Component({
  selector: 'skils-chart',
  imports: [ChartComponent],
  template: `
    <div class="skils_container">
      @for (opt of optionss; track $index) {
      <div class="chart_container">
        <apx-chart
          class="chart"
          [series]="opt.series"
          [labels]="opt.labels"
          [chart]="opt.chart"
          [plotOptions]="opt.plotOptions"
          [legend]="opt.legend"
        >
        </apx-chart>
        <p>{{ opt.labels.at(-1) }}</p>
      </div>
      }
    </div>
  `,
  styles: [
    `
      .skils_container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
      }
      .skils_container,
      .chart_container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .chart_container {
        flex-direction: column;
        width: 150px;
        justify-content: center;
        margin: 10px;
        padding: 10px;
        background-color: rgba(146, 144, 195, 0.1);
        border-radius: 10px;
        transition: transform 0.3s ease;
      }
      .chart_container:hover {
        transform: translateY(-5px);
      }
      .chart {
        width: 100%;
        height: 150px;
      }
      .chart_container p {
        margin: 10px 0 0 0;
        font-size: 14px;
        font-weight: bold;
        color: #9290c3;
        text-align: center;
      }

      /* Responsive styles */
      @media (min-width: 1200px) {
        .chart_container {
          width: 220px;
        }
        .chart {
          height: 200px;
        }
        .chart_container p {
          font-size: 16px;
        }
      }

      @media (max-width: 1199px) and (min-width: 769px) {
        .chart_container {
          width: 190px;
        }
        .chart {
          height: 170px;
        }
        .chart_container p {
          font-size: 15px;
        }
      } /* Mobile Medium (481px-768px) - Force 2 charts per line */
      @media (max-width: 768px) and (min-width: 481px) {
        .skils_container {
          gap: 10px;
        }
        .chart_container {
          width: calc(50% - 5px);
          min-width: 140px;
          max-width: 160px;
        }
        .chart {
          height: 140px;
        }
        .chart_container p {
          font-size: 13px;
        }
      }

      /* Mobile Small (321px-480px) - Force 2 charts per line */
      @media (max-width: 480px) and (min-width: 321px) {
        .skils_container {
          gap: 8px;
        }
        .chart_container {
          width: calc(50% - 4px);
          min-width: 120px;
          max-width: 140px;
          margin: 5px;
        }
        .chart {
          height: 120px;
        }
        .chart_container p {
          font-size: 12px;
        }
      }

      /* Very small screens (≤320px) - Still maintain 2 charts */
      @media (max-width: 320px) {
        .skils_container {
          gap: 6px;
        }
        .chart_container {
          width: calc(50% - 3px);
          min-width: 100px;
          max-width: 120px;
          margin: 3px;
        }
        .chart {
          height: 100px;
        }
        .chart_container p {
          font-size: 11px;
        }
      }
    `,
  ],
})
export class SkilsChartComponent {
  optionss: ChartOptions[] = [];

  constructor() {
    this.skills.forEach((v) => {
      var options: ChartOptions = {
        series: [100 - v.level, v.level],
        chart: {
          height: 150,
          type: 'donut',
          zoom: {
            enabled: false,
          },
        },
        title: {
          text: 'Skills',
        },
        xaxis: {},
        labels: ['None', v.name],
        responsive: [
          {
            breakpoint: 1200,
            options: {
              chart: {
                height: 200,
                width: 200,
              },
            },
          },
          {
            breakpoint: 1199,
            options: {
              chart: {
                height: 170,
                width: 170,
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              chart: {
                height: 140,
                width: 140,
              },
            },
          },
          {
            breakpoint: 480,
            options: {
              chart: {
                height: 120,
                width: 120,
              },
            },
          },
          {
            breakpoint: 320,
            options: {
              chart: {
                height: 100,
                width: 100,
              },
            },
          },
        ],
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {},
                value: {},
              },
            },
          },
        },
        legend: {
          show: false,
        },
      };

      this.optionss.push(options);
    });
  }

  skills = [
    {
      name: 'C# / .NET',
      level: 95, // Très utilisé dans vos projets, en particulier .NET MAUI, Blazor et SignalR.
    },
    {
      name: 'PostgreSQL',
      level: 90, // Base de données principale pour vos projets Blazor.
    },
    {
      name: 'Blazor',
      level: 85, // Framework que vous utilisez activement pour des projets web et e-commerce.
    },
    {
      name: 'JavaScript',
      level: 80, // Connaissances avancées pour les projets frontend.
    },
    {
      name: 'Entity Framework',
      level: 80, // Utilisé pour la gestion des données dans vos projets avec PostgreSQL.
    },
    {
      name: 'Angular',
      level: 75, // Framework utilisé pour des composants et des interfaces utilisateur.
    },
    {
      name: 'HTML / CSS',
      level: 75, // Solide compréhension pour créer des interfaces utilisateur.
    },
    {
      name: 'Java',
      level: 70, // Utilisé dans des projets passés, notamment pour la surveillance des applications.
    },
    {
      name: 'SignalR',
      level: 70, // Utilisé pour l'implémentation de flux vidéo et de communication en temps réel.
    },
    {
      name: 'AI / Weka',
      level: 65, // Connaissances appliquées en intelligence artificielle et data mining.
    },
    {
      name: 'MAUI',
      level: 80, // Expérience mentionnée, mais moins utilisée.
    },
    {
      name: 'Unity',
      level: 40, // Débutant en développement de jeux.
    },
  ];
}
