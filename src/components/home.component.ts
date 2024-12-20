import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  template: `
  <div class="home_container">
    <div class="home_container_image">
      <div>
        <img class="me-img" src="trustme.png" height="280" alt="Developer" />
      </div>
    </div>
    <div class="home_container_data">
      <h3 class="item" style="font-size: 30px;">I am GARBA MOUSTAPHA</h3>
      <h1>Full Stack Developer</h1>
      <p style="color: #9290C3; font-size: 20px;">Frontend, Backend, Mobile and Desktop</p>
      <button class="item button">Contact Me</button>
    </div>
  </div>
  `,
  styles: [`
        .home_container {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          padding: 20px;
          justify-content: space-around;
          align-items: center;
          background-color: #1B1A55;
          margin-top: 30px;
          border-radius: 10px;
          color: white;
        }

        .home_container_data {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          margin: 10px;
        }

        .home_container_data > .item {
          margin: 35px 0;
        }

        .home_container_data h1 {
          font-size: 55px;
          background: linear-gradient(90deg, rgb(228, 130, 19), rgb(236, 9, 9));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .home_container_image {
          flex: 1;
          min-width: 300px;
          max-width: 400px;
          display: flex;
          justify-content: center;
        }

        .home_container_image > div {
          padding: 10px;
          background: linear-gradient(90deg, rgb(228, 130, 19), rgb(236, 9, 9));
          border-radius: 10px;
        }

        .me-img {
          width: 100%;
          max-width: 280px;
          border-radius: 10px;
          background-color: #1B1A55;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .home_container {
            flex-direction: column;
          }

          .home_container_image {
            order: -1; /* Affiche l'image en premier sur les petits écrans */
          }

          .home_container_data h1 {
            font-size: 40px;
          }

          .home_container_data p {
            font-size: 18px;
          }

          .home_container_image > div {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .home_container_data h1 {
            font-size: 32px;
          }

          .home_container_data p {
            font-size: 16px;
          }

          .me-img {
            max-width: 240px;
          }
        }
    `]
})
export class HomeComponent {}
