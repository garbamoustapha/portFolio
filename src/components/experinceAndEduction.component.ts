import { Component } from '@angular/core';
import { TitleComponent } from './title.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experince-and-eduction',
  imports: [
    TitleComponent,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
  ],
  template: `
    <div id="experience-section" class="gen_container">
      <app-title title="Experience & Education"></app-title>
      <div class="experience_education_container">
        <!-- Experience Section -->
        <div class="experience_container">
          <h2>Experience</h2>
          <mat-stepper
            orientation="vertical"
            [linear]="false"
            style="background-color: transparent;"
            #stepper
          >
            <mat-step>
              <ng-template matStepLabel>1. UNICEF (2024)</ng-template>
              <h3>Developer - UNICEF</h3>
              <br />
              <p>
                Developed the MATAKI app to promote environmental protection and
                awareness.
              </p>
              <br />
              <p>
                Managed complaints in telecom companies using ASP.NET and
                application monitoring with Java.
              </p>
              <br />
            </mat-step>
            <mat-step>
              <ng-template matStepLabel>2. Gabera (2023 - present)</ng-template>
              <h3>Developer - Gabera</h3>
              <br />
              <p>
                Created the Citizens App to facilitate communication between
                citizens and government.
              </p>
              <br />
              <p>
                Technical Project Owner for the MatchUp app, enabling players to
                connect and share information.
              </p>
              <br />
              <p>
                Data modeling for a school app to help schools manage their
                students efficiently.
              </p>
            </mat-step>
          </mat-stepper>
        </div>

        <!-- Education Section -->
        <div class="education_container">
          <h2>Education</h2>
          <mat-stepper
            orientation="vertical"
            [linear]="false"
            style="background-color: transparent;"
            #stepper
          >
            <mat-step>
              <ng-template matStepLabel
                >1. Université Abdou Moumouni de Niamey (2019-2022)</ng-template
              >
              <h3>Bachelor's Degree in Applied Fundamental Computer Science</h3>
              <br />
              <p>
                Focused on computer science, software development, artificial
                intelligence, and data mining.
              </p>
            </mat-step>
            <mat-step>
              <ng-template matStepLabel
                >2. Baccalauréat Série C (2016-2019)</ng-template
              >
              <h3>High School Diploma</h3>
              <br />
              <p>Specialized in mathematics and sciences.</p>
            </mat-step>
            <mat-step>
              <ng-template matStepLabel>3. BEPC (2012-2016)</ng-template>
              <h3>Junior High School Certificate</h3>
              <br />
              <p>Foundation in general education and sciences.</p>
            </mat-step>
          </mat-stepper>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .gen_container {
        display: flex;
        flex-direction: column;
        padding: 40px;
        background-color: #1b1a55;
        margin-top: 30px;
        border-radius: 15px;
        color: white;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        min-height: 600px;
        position: relative;
      }

      .experience_education_container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 40px;
        margin-top: 30px;
        width: 100%;
      }

      .experience_container,
      .education_container {
        flex: 1;
        min-width: 300px;
        padding: 25px;
        background-color: rgba(146, 144, 195, 0.1);
        border-radius: 12px;
        border: 1px solid rgba(146, 144, 195, 0.2);
        transition: all 0.3s ease;
      }

      .experience_container:hover,
      .education_container:hover {
        background-color: rgba(146, 144, 195, 0.15);
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
      }

      h2 {
        color: #9290c3;
        font-size: 1.8em;
        margin-bottom: 20px;
        text-align: center;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      h3 {
        color: white;
        font-size: 1.3em;
        margin: 10px 0;
        font-weight: 500;
      }

      p {
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.6;
        margin: 8px 0;
        font-size: 14px;
      }

      /* Personnalisation du stepper Angular Material */
      ::ng-deep .mat-stepper-vertical {
        background-color: transparent !important;
      }

      ::ng-deep .mat-step-header {
        background-color: rgba(146, 144, 195, 0.1) !important;
        border-radius: 8px !important;
        padding: 12px !important;
        margin-bottom: 10px !important;
        border: 1px solid rgba(146, 144, 195, 0.2) !important;
        transition: all 0.3s ease !important;
      }

      ::ng-deep .mat-step-header:hover {
        background-color: rgba(146, 144, 195, 0.2) !important;
        transform: translateX(5px) !important;
      }

      ::ng-deep .mat-step-header .mat-step-label {
        color: white !important;
        font-weight: 500 !important;
        font-size: 14px !important;
      }

      ::ng-deep .mat-step-header .mat-step-icon {
        background-color: #9290c3 !important;
        color: white !important;
        border: 2px solid #9290c3 !important;
      }

      ::ng-deep .mat-step-header .mat-step-icon-selected {
        background-color: #9290c3 !important;
        color: white !important;
      }

      ::ng-deep .mat-step-content {
        padding: 20px 15px !important;
        background-color: rgba(146, 144, 195, 0.05) !important;
        border-radius: 8px !important;
        margin: 10px 0 20px 0 !important;
        border-left: 3px solid #9290c3 !important;
      }

      ::ng-deep .mat-stepper-vertical-line::before {
        border-left-color: rgba(146, 144, 195, 0.3) !important;
        border-left-width: 2px !important;
      }

      /* Responsive Styles */

      /* Large screens (Desktop > 1200px) */
      @media (min-width: 1200px) {
        .gen_container {
          padding: 50px;
          min-height: 700px;
        }

        .experience_education_container {
          gap: 50px;
          margin-top: 40px;
        }

        .experience_container,
        .education_container {
          min-width: 400px;
          padding: 30px;
        }

        h2 {
          font-size: 2.2em;
          margin-bottom: 25px;
        }

        h3 {
          font-size: 1.5em;
        }

        p {
          font-size: 16px;
        }

        ::ng-deep .mat-step-header {
          padding: 15px !important;
        }

        ::ng-deep .mat-step-content {
          padding: 25px 20px !important;
        }
      }

      /* Medium screens (Tablets 769px-1199px) */
      @media (max-width: 1199px) and (min-width: 769px) {
        .gen_container {
          padding: 35px;
          min-height: 550px;
        }

        .experience_education_container {
          gap: 30px;
          margin-top: 25px;
        }

        .experience_container,
        .education_container {
          min-width: 280px;
          padding: 20px;
        }

        h2 {
          font-size: 1.9em;
          margin-bottom: 18px;
        }

        h3 {
          font-size: 1.4em;
        }

        p {
          font-size: 15px;
        }
      }

      /* Small tablets and large phones (481px-768px) */
      @media (max-width: 768px) {
        .gen_container {
          padding: 25px 20px;
          margin-top: 20px;
          min-height: auto;
        }

        .experience_education_container {
          flex-direction: column;
          gap: 25px;
          margin-top: 20px;
        }

        .experience_container,
        .education_container {
          min-width: auto;
          width: 100%;
          padding: 18px;
        }

        h2 {
          font-size: 1.6em;
          margin-bottom: 15px;
        }

        h3 {
          font-size: 1.2em;
        }

        p {
          font-size: 14px;
        }

        ::ng-deep .mat-step-header {
          padding: 10px !important;
        }

        ::ng-deep .mat-step-content {
          padding: 15px 12px !important;
        }

        ::ng-deep .mat-step-header .mat-step-label {
          font-size: 13px !important;
        }
      }

      /* Mobile phones (321px-480px) */
      @media (max-width: 480px) {
        .gen_container {
          padding: 20px 15px;
          margin-top: 15px;
        }

        .experience_education_container {
          gap: 20px;
          margin-top: 15px;
        }

        .experience_container,
        .education_container {
          padding: 15px;
        }

        h2 {
          font-size: 1.4em;
          margin-bottom: 12px;
        }

        h3 {
          font-size: 1.1em;
          margin: 8px 0;
        }

        p {
          font-size: 13px;
          margin: 6px 0;
        }

        ::ng-deep .mat-step-header {
          padding: 8px !important;
        }

        ::ng-deep .mat-step-content {
          padding: 12px 10px !important;
        }

        ::ng-deep .mat-step-header .mat-step-label {
          font-size: 12px !important;
        }
      }

      /* Very small screens (≤320px) */
      @media (max-width: 320px) {
        .gen_container {
          padding: 15px 10px;
          margin-top: 10px;
        }

        .experience_education_container {
          gap: 15px;
          margin-top: 10px;
        }

        .experience_container,
        .education_container {
          padding: 12px;
        }

        h2 {
          font-size: 1.2em;
          margin-bottom: 10px;
        }

        h3 {
          font-size: 1em;
          margin: 6px 0;
        }

        p {
          font-size: 12px;
          margin: 5px 0;
        }

        ::ng-deep .mat-step-header {
          padding: 6px !important;
        }

        ::ng-deep .mat-step-content {
          padding: 10px 8px !important;
        }

        ::ng-deep .mat-step-header .mat-step-label {
          font-size: 11px !important;
        }
      }

      /* Landscape orientation - optimisation horizontale */
      @media (orientation: landscape) and (max-height: 600px) and (min-width: 600px) {
        .gen_container {
          padding: 20px 30px;
          margin-top: 15px;
          min-height: auto;
        }

        .experience_education_container {
          flex-direction: row;
          gap: 25px;
          margin-top: 15px;
        }

        .experience_container,
        .education_container {
          min-width: 250px;
          padding: 15px;
        }

        h2 {
          font-size: 1.3em;
          margin-bottom: 10px;
        }

        h3 {
          font-size: 1.1em;
          margin: 5px 0;
        }

        p {
          font-size: 12px;
          margin: 4px 0;
          line-height: 1.4;
        }

        ::ng-deep .mat-step-header {
          padding: 8px !important;
        }

        ::ng-deep .mat-step-content {
          padding: 10px 8px !important;
        }
      }

      /* Animation d'entrée */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .experience_container,
      .education_container {
        animation: fadeInUp 0.6s ease-out forwards;
      }

      .experience_container {
        animation-delay: 0.1s;
      }

      .education_container {
        animation-delay: 0.2s;
      }

      /* Optimisations pour les préférences d'animation réduites */
      @media (prefers-reduced-motion: reduce) {
        .experience_container,
        .education_container {
          animation: none;
        }

        .experience_container:hover,
        .education_container:hover {
          transform: none;
        }

        ::ng-deep .mat-step-header:hover {
          transform: none !important;
        }
      }
    `,
  ],
})
export class ExperinceAndEductionComponent {}
