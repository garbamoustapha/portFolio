import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div id="home-section" class="home_container">
      <div class="home_container_image">
        <div>
          <img class="me-img" src="trustme.png" height="280" alt="Developer" />
        </div>
      </div>
      <div class="home_container_data">
        <h3 class="item" style="font-size: 30px;">I am GARBA MOUSTAPHA</h3>
        <h1>Full Stack Developer</h1>
        <p style="color: #9290C3; font-size: 20px;">
          Frontend, Backend, Mobile and Desktop
        </p>
        <button class="item button" (click)="ContactMe()">Contact Me</button>
      </div>
    </div>
  `,
  styles: [
    `
      .home_container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 20px;
        justify-content: space-around;
        align-items: center;
        background-color: #1b1a55;
        margin-top: 30px;
        border-radius: 10px;
        color: white;
        box-sizing: border-box;
        min-height: 400px;
      }

      .home_container_data {
        flex: 1;
        min-width: 300px;
        max-width: 600px;
        margin: 10px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .home_container_data > .item {
        margin: 35px 0;
      }

      .home_container_data h3 {
        font-size: 30px;
        margin: 20px 0;
        color: white;
        font-weight: normal;
      }

      .home_container_data h1 {
        font-size: 55px;
        background: linear-gradient(90deg, rgb(228, 130, 19), rgb(236, 9, 9));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 20px 0;
        line-height: 1.1;
      }

      .home_container_data p {
        color: #9290c3;
        font-size: 20px;
        margin: 20px 0;
        line-height: 1.4;
      }

      .button {
        background: linear-gradient(90deg, rgb(228, 130, 19), rgb(236, 9, 9));
        color: white;
        border: none;
        border-radius: 8px;
        padding: 15px 30px;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        transition: all 0.3s ease;
        margin: 20px 0;
        align-self: flex-start;
        min-width: 150px;
      }

      .button:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
      }

      .home_container_image {
        flex: 1;
        min-width: 300px;
        max-width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
      }

      .home_container_image > div {
        padding: 10px;
        background: linear-gradient(90deg, rgb(228, 130, 19), rgb(236, 9, 9));
        border-radius: 10px;
        transition: transform 0.3s ease;
      }

      .home_container_image > div:hover {
        transform: scale(1.02);
      }

      .me-img {
        width: 100%;
        max-width: 280px;
        height: auto;
        border-radius: 10px;
        background-color: #1b1a55;
        display: block;
      }

      /* Responsive Design */

      /* Large screens (Desktop) */
      @media (min-width: 1200px) {
        .home_container {
          padding: 40px;
          min-height: 500px;
        }

        .home_container_data {
          margin: 20px;
        }

        .home_container_data h3 {
          font-size: 35px;
        }

        .home_container_data h1 {
          font-size: 65px;
        }

        .home_container_data p {
          font-size: 22px;
        }

        .button {
          font-size: 20px;
          padding: 18px 35px;
        }

        .me-img {
          max-width: 320px;
        }
      }

      /* Medium screens (Tablets) */
      @media (max-width: 1199px) and (min-width: 769px) {
        .home_container {
          padding: 30px;
          min-height: 450px;
        }

        .home_container_data h3 {
          font-size: 28px;
        }

        .home_container_data h1 {
          font-size: 50px;
        }

        .home_container_data p {
          font-size: 19px;
        }

        .button {
          font-size: 17px;
          padding: 14px 28px;
        }

        .me-img {
          max-width: 260px;
        }
      }

      /* Small tablets and large phones */
      @media (max-width: 768px) {
        .home_container {
          flex-direction: column;
          padding: 25px 20px;
          text-align: center;
          min-height: auto;
        }

        .home_container_data {
          text-align: center;
          margin: 20px 0;
          min-width: auto;
        }

        .home_container_data h3 {
          font-size: 24px;
          margin: 15px 0;
        }

        .home_container_data h1 {
          font-size: 40px;
          margin: 15px 0;
        }

        .home_container_data p {
          font-size: 18px;
          margin: 15px 0;
        }

        .button {
          align-self: center;
          font-size: 16px;
          padding: 12px 24px;
          margin: 20px 0;
        }

        .home_container_image {
          order: -1;
          margin: 20px 0;
          min-width: auto;
        }

        .home_container_image > div {
          margin-bottom: 20px;
        }

        .me-img {
          max-width: 240px;
        }
      }

      /* Mobile phones */
      @media (max-width: 480px) {
        .home_container {
          padding: 20px 15px;
          margin-top: 20px;
        }

        .home_container_data h3 {
          font-size: 20px;
          margin: 12px 0;
        }

        .home_container_data h1 {
          font-size: 32px;
          margin: 12px 0;
        }

        .home_container_data p {
          font-size: 16px;
          margin: 12px 0;
        }

        .button {
          font-size: 14px;
          padding: 10px 20px;
          margin: 15px 0;
          width: 100%;
          max-width: 200px;
        }

        .me-img {
          max-width: 200px;
        }

        .home_container_image > div {
          padding: 8px;
        }
      }

      /* Very small screens */
      @media (max-width: 320px) {
        .home_container {
          padding: 15px 10px;
          margin-top: 15px;
        }

        .home_container_data h3 {
          font-size: 18px;
          margin: 10px 0;
        }

        .home_container_data h1 {
          font-size: 26px;
          margin: 10px 0;
        }

        .home_container_data p {
          font-size: 14px;
          margin: 10px 0;
        }

        .button {
          font-size: 12px;
          padding: 8px 16px;
          margin: 12px 0;
        }

        .me-img {
          max-width: 180px;
        }
      }

      /* Landscape orientation on mobile */
      @media (orientation: landscape) and (max-height: 600px) {
        .home_container {
          flex-direction: row;
          padding: 15px;
          min-height: auto;
        }

        .home_container_image {
          order: 0;
          flex: 0.6;
        }

        .home_container_data {
          flex: 1;
          text-align: left;
          margin: 0 20px;
        }

        .home_container_data h3 {
          font-size: 18px;
          margin: 8px 0;
        }

        .home_container_data h1 {
          font-size: 28px;
          margin: 8px 0;
        }

        .home_container_data p {
          font-size: 14px;
          margin: 8px 0;
        }

        .button {
          align-self: flex-start;
          font-size: 12px;
          padding: 8px 16px;
          margin: 10px 0;
        }

        .me-img {
          max-width: 160px;
        }
      }
    `,
  ],
})
export class HomeComponent {
  ContactMe() {
    const section = document.getElementById('contact-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
