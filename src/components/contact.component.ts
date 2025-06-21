import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TitleComponent } from './title.component';

@Component({
  selector: 'app-contact',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    TitleComponent,
  ],
  template: `
    <div id="contact-section" class="get-in-touch-container gen_container">
      <app-title [title]="'Get In Touch'"></app-title>
      <div class="contact-info-form">
        <div class="contact-info">
          <div class="info-item">
            <mat-icon>email</mat-icon>
            <p>{{ 'garbamoustapha0@gmail.com' }}</p>
          </div>
          <div class="info-item">
            <mat-icon>work</mat-icon>
            <a
              href="https://www.linkedin.com/in/moustapha-garba-050b93264"
              target="_blank"
              >LinkedIn Profile</a
            >
          </div>
          <div class="info-item">
            <mat-icon>phone</mat-icon>
            <p>+227 80 47 48 25</p>
          </div>
          <div class="info-item">
            <mat-icon>location_on</mat-icon>
            <p>Niamey, Niger</p>
          </div>
        </div>
        <form class="contact-form" (ngSubmit)="onSubmit()">
          <h3 class="form-title">Send me a message</h3>
          <mat-form-field class="full-width">
            <mat-label>Name</mat-label>
            <input matInput [(ngModel)]="formData.name" name="name" required />
          </mat-form-field>
          <mat-form-field class="full-width">
            <mat-label>Email</mat-label>
            <input
              matInput
              [(ngModel)]="formData.email"
              name="email"
              type="email"
              required
            />
          </mat-form-field>
          <mat-form-field class="full-width">
            <mat-label>Message</mat-label>
            <textarea
              matInput
              [(ngModel)]="formData.message"
              name="message"
              rows="5"
              required
            ></textarea>
          </mat-form-field>
          <button
            class="button"
            style="width: 200px;"
            mat-raised-button
            color="primary"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .get-in-touch-container {
        flex-direction: column;
        background-color: #1b1a55;
        margin-top: 30px;
        border-radius: 15px;
        color: white;
        min-height: 500px;
        padding: 40px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        position: relative;
      }

      .contact-info-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        margin-top: 30px;
        gap: 40px;
      }

      .contact-info {
        flex: 1;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 24px;
      }
      .contact-form {
        flex: 1.5;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: rgba(255, 255, 255, 0.05);
        padding: 30px;
        border-radius: 15px;
        border: 2px solid rgba(25, 118, 210, 0.3);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        position: relative;
      }

      .contact-form::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          135deg,
          rgba(25, 118, 210, 0.1),
          rgba(25, 118, 210, 0.05)
        );
        border-radius: 13px;
        z-index: -1;
      }
      .contact-form:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        border-color: rgba(25, 118, 210, 0.5);
      }

      .form-title {
        color: #1976d2;
        font-size: 1.5em;
        font-weight: 600;
        text-align: center;
        margin: 0 0 25px 0;
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
      }

      .info-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        background-color: rgba(146, 144, 195, 0.1);
        border-radius: 10px;
        transition: all 0.3s ease;
        border: 1px solid rgba(146, 144, 195, 0.2);
      }

      .info-item:hover {
        background-color: rgba(146, 144, 195, 0.2);
        transform: translateX(5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .info-item mat-icon,
      .info-item i {
        color: #1976d2;
        font-size: 24px;
        min-width: 24px;
      }

      .info-item p,
      .info-item a {
        margin: 0;
        color: white;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
      }
      .info-item a:hover {
        color: #1976d2;
        text-decoration: underline;
      }

      .contact-form .full-width {
        width: 100%;
      }

      .contact-form ::ng-deep .mat-mdc-form-field {
        width: 100%;
      }

      .contact-form ::ng-deep .mat-mdc-form-field .mat-mdc-floating-label {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .contact-form
        ::ng-deep
        .mat-mdc-form-field.mat-focused
        .mat-mdc-floating-label {
        color: #1976d2 !important;
      }
      .contact-form ::ng-deep .mat-mdc-text-field-wrapper {
        background-color: rgba(255, 255, 255, 0.1) !important;
        border-radius: 12px !important;
        border: 1px solid rgba(25, 118, 210, 0.2) !important;
      }

      .contact-form
        ::ng-deep
        .mat-mdc-form-field.mat-focused
        .mat-mdc-text-field-wrapper {
        background-color: rgba(255, 255, 255, 0.15) !important;
        border-color: #1976d2 !important;
        box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2) !important;
      }
      .contact-form ::ng-deep .mat-mdc-input-element {
        color: white !important;
        font-weight: 500 !important;
        font-size: 16px !important;
      }

      .contact-form ::ng-deep .mat-mdc-input-element::placeholder {
        color: rgba(255, 255, 255, 0.6) !important;
      }

      .contact-form
        ::ng-deep
        .mat-mdc-text-field-wrapper
        .mat-mdc-notch-outline {
        border-color: rgba(146, 144, 195, 0.3) !important;
      }
      .contact-form
        ::ng-deep
        .mat-mdc-form-field.mat-focused
        .mat-mdc-text-field-wrapper
        .mat-mdc-notch-outline {
        border-color: #1976d2 !important;
        border-width: 2px !important;
      }
      .button {
        background: linear-gradient(
          90deg,
          rgb(228, 130, 19),
          rgb(236, 9, 9)
        ) !important;
        color: white !important;
        border: none !important;
        border-radius: 10px !important;
        padding: 12px 30px !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        text-transform: uppercase !important;
        letter-spacing: 1px !important;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
        align-self: center;
        width: 200px !important;
      }

      .button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3) !important;
        background: linear-gradient(
          90deg,
          rgb(236, 9, 9),
          rgb(228, 130, 19)
        ) !important;
      }

      .button:active {
        transform: translateY(0) !important;
      }

      /* Responsive Styles */

      /* Large screens (Desktop > 1200px) */
      @media (min-width: 1200px) {
        .get-in-touch-container {
          padding: 50px;
          margin-top: 40px;
          min-height: 600px;
        }

        .contact-info-form {
          gap: 60px;
          margin-top: 40px;
        }

        .contact-info {
          min-width: 350px;
        }
        .contact-form {
          min-width: 400px;
          padding: 35px;
        }

        .form-title {
          font-size: 1.7em;
          margin-bottom: 30px;
        }

        .info-item {
          padding: 20px;
        }

        .info-item mat-icon,
        .info-item i {
          font-size: 28px;
        }

        .info-item p,
        .info-item a {
          font-size: 16px;
        }

        .button {
          font-size: 18px !important;
          padding: 15px 40px !important;
          width: 250px !important;
        }
      }

      /* Medium screens (Tablets 769px-1199px) */
      @media (max-width: 1199px) and (min-width: 769px) {
        .get-in-touch-container {
          padding: 35px;
          margin-top: 25px;
          min-height: 500px;
        }

        .contact-info-form {
          gap: 30px;
          margin-top: 25px;
        }

        .contact-info {
          min-width: 280px;
        }
        .contact-form {
          min-width: 320px;
          padding: 25px;
        }

        .form-title {
          font-size: 1.4em;
          margin-bottom: 20px;
        }

        .info-item {
          padding: 18px;
        }

        .info-item mat-icon,
        .info-item i {
          font-size: 26px;
        }

        .info-item p,
        .info-item a {
          font-size: 15px;
        }

        .button {
          font-size: 17px !important;
          padding: 14px 35px !important;
          width: 220px !important;
        }
      }

      /* Small tablets and large phones (481px-768px) */
      @media (max-width: 768px) {
        .get-in-touch-container {
          padding: 25px 20px;
          margin-top: 20px;
          min-height: auto;
        }

        .contact-info-form {
          flex-direction: column;
          align-items: center;
          gap: 30px;
          margin-top: 20px;
        }
        .contact-info,
        .contact-form {
          width: 100%;
          min-width: auto;
          max-width: 500px;
        }

        .contact-form {
          padding: 20px;
        }

        .form-title {
          font-size: 1.3em;
          margin-bottom: 18px;
        }

        .info-item {
          padding: 12px;
        }

        .info-item mat-icon,
        .info-item i {
          font-size: 24px;
        }

        .info-item p,
        .info-item a {
          font-size: 14px;
        }

        .button {
          width: 100% !important;
          max-width: 300px !important;
          font-size: 16px !important;
          padding: 12px 30px !important;
        }
      }

      /* Mobile phones (321px-480px) */
      @media (max-width: 480px) {
        .get-in-touch-container {
          padding: 20px 15px;
          margin-top: 15px;
        }
        .contact-info-form {
          gap: 20px;
          margin-top: 15px;
        }

        .contact-form {
          padding: 15px;
        }

        .form-title {
          font-size: 1.1em;
          margin-bottom: 15px;
        }

        .info-item {
          padding: 10px;
          gap: 10px;
        }

        .info-item mat-icon,
        .info-item i {
          font-size: 20px;
        }

        .info-item p,
        .info-item a {
          font-size: 13px;
        }

        .button {
          font-size: 14px !important;
          padding: 10px 20px !important;
          max-width: 250px !important;
        }
      }

      /* Very small screens (≤320px) */
      @media (max-width: 320px) {
        .get-in-touch-container {
          padding: 15px 10px;
        }

        .contact-form {
          padding: 12px;
        }

        .form-title {
          font-size: 1em;
          margin-bottom: 12px;
        }

        .info-item {
          padding: 8px;
          gap: 8px;
        }

        .info-item mat-icon,
        .info-item i {
          font-size: 18px;
        }

        .info-item p,
        .info-item a {
          font-size: 12px;
        }

        .button {
          font-size: 13px !important;
          padding: 8px 16px !important;
          max-width: 200px !important;
        }
      }

      /* Landscape orientation - optimisation horizontale */
      @media (orientation: landscape) and (max-height: 600px) and (min-width: 600px) {
        .get-in-touch-container {
          padding: 20px 30px;
          margin-top: 15px;
          min-height: auto;
        }

        .contact-info-form {
          flex-direction: row;
          gap: 25px;
          margin-top: 15px;
        }
        .contact-info,
        .contact-form {
          min-width: 250px;
        }

        .contact-form {
          padding: 12px;
        }

        .form-title {
          font-size: 0.9em;
          margin-bottom: 10px;
        }

        .info-item {
          padding: 8px;
          gap: 8px;
        }

        .info-item mat-icon,
        .info-item i {
          font-size: 18px;
        }

        .info-item p,
        .info-item a {
          font-size: 12px;
        }

        .button {
          font-size: 12px !important;
          padding: 8px 16px !important;
          width: 150px !important;
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

      .info-item {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
      }

      .info-item:nth-child(1) {
        animation-delay: 0.1s;
      }
      .info-item:nth-child(2) {
        animation-delay: 0.2s;
      }
      .info-item:nth-child(3) {
        animation-delay: 0.3s;
      }
      .info-item:nth-child(4) {
        animation-delay: 0.4s;
      }

      .contact-form {
        animation: fadeInUp 0.6s ease-out forwards;
        animation-delay: 0.3s;
        opacity: 0;
      }

      /* Optimisations pour les préférences d'animation réduites */
      @media (prefers-reduced-motion: reduce) {
        .info-item,
        .contact-form {
          animation: none;
          opacity: 1;
        }

        .info-item:hover {
          transform: none;
        }

        .button:hover {
          transform: none !important;
        }
      }

      /* High DPI screens - amélioration visuelle */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .get-in-touch-container {
          border-radius: 18px;
        }

        .info-item {
          border-radius: 12px;
        }
      }
    `,
  ],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log('Form Submitted', this.formData);
    // Vous pouvez ajouter ici un appel à un service pour envoyer les données
    alert("Message sent! We'll get back to you soon.");
  }
}
