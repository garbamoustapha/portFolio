import { Component } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { TitleComponent } from "./title.component";

@Component({
  selector: "app-contact",
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    TitleComponent
  ],
  template: `
    <div class="get-in-touch-container gen_container">
      <app-title [title]="'Get In Touch'"></app-title>
      <div class="contact-info-form">
        <div class="contact-info">
          <div class="info-item">
            <mat-icon>email</mat-icon>
            <p>{{"garbamoustapha0@gmail.com"}}</p>
          </div>
          <div class="info-item">
            <i class="fab fa-github"></i>
          <a href="https://www.linkedin.com/in/votre-profil" target="_blank">LinkedIn Profile</a>
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
          <mat-form-field class="full-width">
            <mat-label>Name</mat-label>
            <input matInput [(ngModel)]="formData.name" name="name" required />
          </mat-form-field>
          <mat-form-field class="full-width">
            <mat-label>Email</mat-label>
            <input matInput [(ngModel)]="formData.email" name="email" type="email" required />
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
          <button class="button" style="width: 200px;" mat-raised-button color="primary" type="submit">Send Message</button>
        </form>
        </div>
    </div>
  `,
  styles: [
    `
      .get-in-touch-container {
        flex-direction: column;
      }
      .contact-info-form{
        display: flex;
      }
      .contact-info {
        flex-basis: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 24px;

      }

      .contact-form{
        flex-basis: 50%;

      }

      h2 {
        text-align: center;
        margin-bottom: 16px;
      }
      .contact-info {
        display: flex;
        justify-content: space-around;
        margin-bottom: 24px;
      }
      .info-item {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      mat-icon {
        color: #1976d2;
      }
      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .full-width {
        width: 100%;
      }
    `,
  ],
})
export class ContactComponent {
  formData = {
    name: "",
    email: "",
    message: "",
  };

  onSubmit() {
    console.log("Form Submitted", this.formData);
    // Vous pouvez ajouter ici un appel à un service pour envoyer les données
    alert("Message sent! We'll get back to you soon.");
  }
}
