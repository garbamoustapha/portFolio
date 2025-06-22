import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TitleComponent } from './title.component';
import emailjs from '@emailjs/browser';

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
            <div class="email-options">
              <a href="mailto:garbamoustapha0@gmail.com" class="email-link">
                {{ 'garbamoustapha0@gmail.com' }}
              </a>
              <button
                class="email-client-btn"
                (click)="openEmailClient()"
                title="Open in your email app"
              >
                📧 Open Email App
              </button>
            </div>
          </div>
          <div class="info-item">
            <img
              class="me-img"
              src="linkedin.svg"
              height="18"
              alt="Developer"
            />
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
            [disabled]="isLoading"
          >
            {{ isLoading ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .get-in-touch-container {
        flex-direction: column;
        background-color: #1b1a552a;
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
      .info-item .email-link {
        cursor: pointer;
      }

      .email-options {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
      }

      .email-client-btn {
        background: linear-gradient(90deg, #1976d2, #42a5f5);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        align-self: flex-start;
      }

      .email-client-btn:hover {
        background: linear-gradient(90deg, #42a5f5, #1976d2);
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }

      .email-client-btn:active {
        transform: translateY(0);
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
        position: relative;
      }

      .button:disabled {
        opacity: 0.7 !important;
        cursor: not-allowed !important;
        background: linear-gradient(
          90deg,
          rgba(228, 130, 19, 0.6),
          rgba(236, 9, 9, 0.6)
        ) !important;
      }

      .button:hover:not(:disabled) {
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

        .email-client-btn {
          font-size: 13px;
          padding: 10px 15px;
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

        .email-client-btn {
          font-size: 12px;
          padding: 9px 13px;
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

        .email-client-btn {
          font-size: 11px;
          padding: 8px 12px;
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

        .email-client-btn {
          font-size: 10px;
          padding: 6px 10px;
        }

        .button {
          font-size: 14px !important;
          padding: 10px 20px !important;
          max-width: 250px !important;
        }
      } /* Very small screens (≤320px) */
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

        .email-client-btn {
          font-size: 9px;
          padding: 5px 8px;
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

        .email-client-btn {
          font-size: 9px;
          padding: 4px 6px;
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

  isLoading = false; // EmailJS configuration
  // To set up EmailJS:
  // 1. Go to https://www.emailjs.com/ and create an account
  // 2. Create a new service (Gmail, Outlook, etc.)
  // 3. Create an email template with these variables:
  //    - {{from_name}} - Sender's name
  //    - {{from_email}} - Sender's email
  //    - {{message}} - Message content
  //    - {{to_name}} - Your name (Garba Moustapha)
  //    - {{reply_to}} - Sender's email for replies
  //    - {{subject}} - Dynamic subject line
  //    - {{current_date}} - When the message was sent
  // 4. Get your Service ID, Template ID, and Public Key
  // 5. Replace the placeholder values below with your actual EmailJS credentials
  private readonly EMAIL_SERVICE_ID = 'service_ykt4l7g'; // Replace with your EmailJS service ID
  private readonly EMAIL_TEMPLATE_ID = 'template_le7efxc'; // Replace with your EmailJS template ID
  private readonly EMAIL_PUBLIC_KEY = 'XaVzePubJOVleBsQK'; // Replace with your EmailJS public key

  constructor() {
    // Initialize EmailJS
    emailjs.init(this.EMAIL_PUBLIC_KEY);
  }
  async onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('📝 Please fill in all fields to send your message.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      alert('📧 Please enter a valid email address.');
      return;
    }

    this.isLoading = true;

    try {
      const masage = `Hi Garba Moustapha,

I visited your portfolio website and would love to get in touch with you!

${this.formData.message}
Looking forward to hearing from you!

Best regards,
${this.formData.name} at ${this.formData.email}`;
      // Prepare template parameters with more user-friendly content
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: masage,
        to_name: 'Garba Moustapha',
        reply_to: this.formData.email,
        subject: `New Contact Form Message from ${this.formData.name}`,
        current_date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        this.EMAIL_SERVICE_ID,
        this.EMAIL_TEMPLATE_ID,
        templateParams
      );

      // Success message with more personality
      alert(
        `🎉 Thank you ${this.formData.name}! Your message has been sent successfully. I'll get back to you as soon as possible at ${this.formData.email}.`
      );

      // Reset form
      this.formData = {
        name: '',
        email: '',
        message: '',
      };
    } catch (error) {
      console.error('Error sending email:', error);

      // More helpful error message
      alert(
        `😕 Oops! There was an issue sending your message. Please try again in a few minutes, or feel free to reach out directly at garbamoustapha0@gmail.com. Sorry for the inconvenience!`
      );
    } finally {
      this.isLoading = false;
    }
  }
  // Alternative method to open default email client with a friendly pre-filled message
  openEmailClient() {
    const subject = '👋 Hello from your Portfolio Website!';
    const body = `Hi Garba Moustapha,

I visited your portfolio website and would love to get in touch with you!

[Please write your message here]

Looking forward to hearing from you!

Best regards,
[Your Name]`;

    const mailtoUrl = `mailto:garbamoustapha0@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  }
}
