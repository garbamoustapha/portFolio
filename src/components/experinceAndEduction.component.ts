import { Component } from "@angular/core";
import { TitleComponent } from "./title.component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-experince-and-eduction",
  imports: [
    TitleComponent,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
  ],
  template: `
    <div class="gen_container">
      <app-title title="Experience & Education"></app-title>
      <div class="experience_education_container">
        <!-- Experience Section -->
        <div class="experience_container">
          <h2>Professional Experience</h2>
          <mat-stepper orientation="vertical" [linear]="false" style="background-color: transparent;" #stepper>
            <mat-step>
              <ng-template matStepLabel>1. UNICEF (2024)</ng-template>
              <h3>Developer - UNICEF</h3><br/>
              <p>Developed the MATAKI app to promote environmental protection and awareness.</p><br/>
              <p>Managed complaints in telecom companies using ASP.NET and application monitoring with Java.</p><br/>
            </mat-step>
            <mat-step>
              <ng-template matStepLabel>2. Gabera (2023 - present)</ng-template>
              <h3>Developer - Gabera</h3><br/>
              <p>Created the Citizens App to facilitate communication between citizens and government.</p><br/>
              <p>Technical Project Owner for the MatchUp app, enabling players to connect and share information.</p><br/>
              <p>Data modeling for a school app to help schools manage their students efficiently.</p>
            </mat-step>
          </mat-stepper>
        </div>

        <!-- Education Section -->
        <div class="education_container">
          <h2>Education</h2>
          <mat-stepper orientation="vertical" [linear]="false" style="background-color: transparent;" #stepper>
            <mat-step>
              <ng-template matStepLabel>1. Université Abdou Moumouni de Niamey (2019-2022)</ng-template>
              <h3>Bachelor's Degree in Applied Fundamental Computer Science</h3><br/>
              <p>Focused on computer science, software development, artificial intelligence, and data mining.</p>
            </mat-step>
            <mat-step>
              <ng-template matStepLabel>2. Baccalauréat Série C (2016-2019)</ng-template>
              <h3>High School Diploma</h3><br/>
              <p>Specialized in mathematics and sciences.</p>
            </mat-step>
            <mat-step>
              <ng-template matStepLabel>3. BEPC (2012-2016)</ng-template>
              <h3>Junior High School Certificate</h3><br/>
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
        padding: 16px;
      }
      .experience_education_container {
        display: flex;
        justify-content: space-between;
        gap: 32px;
      }
      .experience_container,
      .education_container {
        flex: 1;
      }
    `,
  ],
})
export class ExperinceAndEductionComponent {}
