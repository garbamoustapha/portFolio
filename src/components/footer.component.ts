import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  template: `
    <footer class="footer-container gen_container">
      <div class="footer-content">
        <!-- Contact Section -->
        <div class="footer-section">
          <h3>Contact</h3>
          <p>
            Email:
            <a href="mailto:garbamoustapha0@gmail.com">{{
              'garbamoustapha0@gmail.com'
            }}</a>
          </p>
          <p>Phone: <a href="tel:+22780474825">+227 80 47 48 25</a></p>
          <p>Location: Niamey, Niger</p>
        </div>

        <!-- Social Media Links -->
        <div class="footer-section">
          <h3>Follow Me</h3>
          <div class="social-links">
            <a
              href="https://www.linkedin.com/in/moustapha-garba-050b93264"
              target="_blank"
              aria-label="LinkedIn"
            >
              <img
                class="me-img"
                src="linkedin.svg"
                height="18"
                alt="Developer"
              />
            </a>
            <a
              href="https://github.com/garbamoustapha"
              target="_blank"
              aria-label="GitHub"
            >
              <img
                class="me-img"
                src="github.svg"
                height="18"
                alt="Developer"
              />
            </a>
            <a
              href="https://www.codingame.com/profile/718cbf6f63c186f18f0dd3b09b6c2c2a8835854"
              target="_blank"
              aria-label="GitHub"
            >
              <img
                class="me-img"
                src="codingame.svg"
                height="28"
                alt="Developer"
              />
            </a>
          </div>
        </div>

        <!-- About / Credits Section -->
        <div class="footer-section">
          <h3>About</h3>
          <p>
            Crafted with ❤️ by Garba Moustapha. Dedicated to creating modern,
            efficient, and scalable software solutions.
          </p>
          <p>&copy; {{ currentYear }} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer-container {
        padding: 40px 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
  background-color: #1b1a552A;
        margin-top: 30px;
        border-radius: 15px 15px 0 0;
        color: white;
        box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
        position: relative;
      }

      .footer-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
        width: 100%;
        max-width: 1200px;
        gap: 30px;
      }

      .footer-section {
        margin: 15px;
        min-width: 250px;
        flex: 1;
        padding: 20px;
        background-color: rgba(146, 144, 195, 0.1);
        border-radius: 10px;
        transition: all 0.3s ease;
        border: 1px solid rgba(146, 144, 195, 0.2);
      }

      .footer-section:hover {
        background-color: rgba(146, 144, 195, 0.15);
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }

      h3 {
        margin-bottom: 15px;
        font-size: 1.4em;
        color: #9290c3;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      p {
        margin: 8px 0;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.9);
        font-size: 14px;
      }

      a {
        color: #9290c3;
        text-decoration: none;
        transition: all 0.3s ease;
        font-weight: 500;
      }

      a:hover {
        color: white;
        text-decoration: underline;
        text-shadow: 0 0 5px rgba(146, 144, 195, 0.5);
      }

      .social-links {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-top: 15px;
        flex-wrap: wrap;
      }

      .social-links a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background-color: rgba(146, 144, 195, 0.2);
        border-radius: 50%;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        text-decoration: none;
      }

      .social-links a:hover {
        background-color: #9290c3;
        transform: translateY(-3px) scale(1.1);
        box-shadow: 0 6px 12px rgba(146, 144, 195, 0.4);
        border-color: #9290c3;
        text-decoration: none;
      }
      .social-links mat-icon {
        font-size: 24px;
        color: #9290c3;
        transition: color 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }

      .social-links a:hover mat-icon {
        color: white;
      }

      /* Responsive Styles */

      /* Large screens (Desktop > 1200px) */
      @media (min-width: 1200px) {
        .footer-container {
          padding: 50px 40px;
        }

        .footer-content {
          gap: 40px;
        }

        .footer-section {
          min-width: 300px;
          padding: 25px;
        }

        h3 {
          font-size: 1.6em;
          margin-bottom: 20px;
        }

        p {
          font-size: 16px;
        }

        .social-links a {
          width: 50px;
          height: 50px;
        }

        .social-links mat-icon {
          font-size: 28px;
        }
      }

      /* Medium screens (Tablets 769px-1199px) */
      @media (max-width: 1199px) and (min-width: 769px) {
        .footer-container {
          padding: 35px 25px;
        }

        .footer-content {
          gap: 25px;
        }

        .footer-section {
          min-width: 220px;
          padding: 18px;
        }

        h3 {
          font-size: 1.3em;
        }

        p {
          font-size: 15px;
        }

        .social-links a {
          width: 42px;
          height: 42px;
        }

        .social-links mat-icon {
          font-size: 26px;
        }
      }

      /* Small tablets and large phones (481px-768px) */
      @media (max-width: 768px) {
        .footer-container {
          padding: 30px 20px;
          margin-top: 20px;
        }

        .footer-content {
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .footer-section {
          min-width: auto;
          width: 100%;
          max-width: 400px;
          margin: 10px 0;
          padding: 15px;
        }

        h3 {
          font-size: 1.2em;
          margin-bottom: 12px;
        }

        p {
          font-size: 13px;
        }

        .social-links {
          gap: 15px;
        }

        .social-links a {
          width: 40px;
          height: 40px;
        }

        .social-links mat-icon {
          font-size: 22px;
        }
      }

      /* Mobile phones (321px-480px) */
      @media (max-width: 480px) {
        .footer-container {
          padding: 25px 15px;
          margin-top: 15px;
        }

        .footer-content {
          gap: 15px;
        }

        .footer-section {
          padding: 12px;
          margin: 8px 0;
        }

        h3 {
          font-size: 1.1em;
          margin-bottom: 10px;
        }

        p {
          font-size: 12px;
          margin: 6px 0;
        }

        .social-links {
          gap: 12px;
        }

        .social-links a {
          width: 35px;
          height: 35px;
        }

        .social-links mat-icon {
          font-size: 20px;
        }
      }

      /* Very small screens (≤320px) */
      @media (max-width: 320px) {
        .footer-container {
          padding: 20px 10px;
        }

        .footer-section {
          padding: 10px;
          margin: 5px 0;
        }

        h3 {
          font-size: 1em;
        }

        p {
          font-size: 11px;
        }

        .social-links a {
          width: 32px;
          height: 32px;
        }

        .social-links mat-icon {
          font-size: 18px;
        }
      }

      /* Landscape orientation - optimisation */
      @media (orientation: landscape) and (max-height: 600px) and (min-width: 600px) {
        .footer-container {
          padding: 20px;
          margin-top: 15px;
        }

        .footer-content {
          flex-direction: row;
          gap: 20px;
        }

        .footer-section {
          padding: 10px;
          margin: 5px;
          min-width: 180px;
        }

        h3 {
          font-size: 1em;
          margin-bottom: 8px;
        }

        p {
          font-size: 11px;
          margin: 4px 0;
        }

        .social-links {
          gap: 10px;
        }

        .social-links a {
          width: 30px;
          height: 30px;
        }

        .social-links mat-icon {
          font-size: 16px;
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

      .footer-section {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
      }

      .footer-section:nth-child(1) {
        animation-delay: 0.1s;
      }
      .footer-section:nth-child(2) {
        animation-delay: 0.2s;
      }
      .footer-section:nth-child(3) {
        animation-delay: 0.3s;
      }

      /* Optimisations pour les préférences d'animation réduites */
      @media (prefers-reduced-motion: reduce) {
        .footer-section {
          animation: none;
          opacity: 1;
        }

        .footer-section:hover {
          transform: none;
        }

        .social-links a:hover {
          transform: none;
        }
      }

      /* High DPI screens - amélioration visuelle */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .footer-container {
          border-radius: 18px 18px 0 0;
        }

        .footer-section {
          border-radius: 12px;
        }

        .social-links a {
          border-radius: 50%;
        }
      }

      /* Hover effects pour les liens dans le texte */
      .footer-section a[href^='mailto:']:hover,
      .footer-section a[href^='tel:']:hover {
        background-color: rgba(146, 144, 195, 0.1);
        padding: 2px 4px;
        border-radius: 4px;
      }

      /* Animation pour les icônes sociales */
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }

      .social-links a:hover mat-icon {
        animation: pulse 0.6s ease-in-out;
      }
    `,
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
