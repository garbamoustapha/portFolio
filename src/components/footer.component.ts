import { Component } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: "app-footer",
  imports: [MatIconModule],
  template: `
    <footer class="footer-container gen_container">
      <div class="footer-content">
        <!-- Contact Section -->
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:garbamoustapha0@gmail.com">{{'garbamoustapha0@gmail.com'}}</a></p>
          <p>Phone: <a href="tel:+22780474825">+227 80 47 48 25</a></p>
          <p>Location: Niamey, Niger</p>
        </div>

        <!-- Social Media Links -->
        <div class="footer-section">
          <h3>Follow Me</h3>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/votre-profil" target="_blank" aria-label="LinkedIn">
              <mat-icon>linkedin</mat-icon>
            </a>
            <a href="https://github.com/votre-profil" target="_blank" aria-label="GitHub">
              <mat-icon>code</mat-icon>
            </a>
            <a href="https://twitter.com/votre-profil" target="_blank" aria-label="Twitter">
              <mat-icon>twitter</mat-icon>
            </a>
          </div>
        </div>

        <!-- About / Credits Section -->
        <div class="footer-section">
          <h3>About</h3>
          <p>
            Crafted with ❤️ by Garba Moustapha. Dedicated to creating modern, efficient, and
            scalable software solutions.
          </p>
          <p>&copy; {{ currentYear }} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer-container {
        padding: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .footer-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
        max-width: 1200px;
      }
      .footer-section {
        margin: 10px;
        min-width: 200px;
      }
      h3 {
        margin-bottom: 10px;
        font-size: 1.2em;
        color: #9290C3;
      }
      a {
        color:#9290C3;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      .social-links {
        display: flex;
        gap: 15px;
        justify-content: center;
      }
      mat-icon {
        font-size: 24px;
        color: #9290C3;
      }
      mat-icon:hover {
        color: #9290C3;
      }
    `,
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
