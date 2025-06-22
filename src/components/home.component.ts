import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div id="home-section" class="home_container">
      <div class="home_container_image">
        <div class="image-wrapper">
          <div class="floating-particles">
            <span class="particle"></span>
            <span class="particle"></span>
            <span class="particle"></span>
            <span class="particle"></span>
            <span class="particle"></span>
            <span class="particle"></span>
          </div>
          <img class="me-img" src="trustme.png" height="280" alt="Developer" />
          <div class="scan-line"></div>
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
        perspective: 1000px;
      }
      .home_container_image > div {
        position: relative;
        padding: 10px;
        background: linear-gradient(45deg, #00ff7f, #ff6b35, #00bfff, #ff1744);
        background-size: 400% 400%;
        border-radius: 20px;
        transition: all 0.5s ease;
        animation: gradientShift 4s ease-in-out infinite;
        box-shadow: 0 0 30px rgba(0, 255, 127, 0.4),
          0 0 60px rgba(255, 107, 53, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.1);
        border: 2px solid transparent;
        background-clip: padding-box;
        overflow: hidden;
      }

      .image-wrapper {
        position: relative;
        display: block;
      }

      .floating-particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      }

      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: #00ff7f;
        border-radius: 50%;
        animation: float 6s ease-in-out infinite;
        box-shadow: 0 0 10px #00ff7f;
      }

      .particle:nth-child(1) {
        top: 20%;
        left: 20%;
        animation-delay: 0s;
        animation-duration: 4s;
      }

      .particle:nth-child(2) {
        top: 80%;
        left: 80%;
        animation-delay: 1s;
        animation-duration: 5s;
        background: #ff6b35;
        box-shadow: 0 0 10px #ff6b35;
      }

      .particle:nth-child(3) {
        top: 60%;
        left: 10%;
        animation-delay: 2s;
        animation-duration: 6s;
        background: #00bfff;
        box-shadow: 0 0 10px #00bfff;
      }

      .particle:nth-child(4) {
        top: 30%;
        left: 90%;
        animation-delay: 3s;
        animation-duration: 4.5s;
        background: #ff1744;
        box-shadow: 0 0 10px #ff1744;
      }

      .particle:nth-child(5) {
        top: 70%;
        left: 50%;
        animation-delay: 1.5s;
        animation-duration: 5.5s;
        background: #ffd700;
        box-shadow: 0 0 10px #ffd700;
      }

      .particle:nth-child(6) {
        top: 40%;
        left: 30%;
        animation-delay: 2.5s;
        animation-duration: 4.8s;
        background: #ff69b4;
        box-shadow: 0 0 10px #ff69b4;
      }

      .scan-line {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ff7f, transparent);
        animation: scan 3s linear infinite;
        z-index: 3;
      }

      @keyframes scan {
        0% {
          top: 0;
          opacity: 1;
        }
        50% {
          opacity: 0.8;
        }
        100% {
          top: 100%;
          opacity: 0;
        }
      }

      .home_container_image > div::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: linear-gradient(45deg, #00ff7f, #ff6b35, #00bfff, #ff1744);
        background-size: 400% 400%;
        border-radius: 25px;
        z-index: -1;
        animation: gradientShift 4s ease-in-out infinite;
        filter: blur(10px);
        opacity: 0.7;
      }

      .home_container_image > div::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 120%;
        height: 120%;
        background: radial-gradient(
          circle,
          transparent 40%,
          rgba(0, 255, 127, 0.1) 70%
        );
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: -2;
        animation: pulse 3s ease-in-out infinite;
      }

      .home_container_image > div:hover {
        transform: rotateY(10deg) rotateX(5deg) scale(1.05);
        box-shadow: 0 0 50px rgba(0, 255, 127, 0.6),
          0 0 100px rgba(255, 107, 53, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3);
        animation-duration: 2s;
      }

      .me-img {
        width: 100%;
        max-width: 280px;
        height: auto;
        border-radius: 15px;
        background-color:rgb(6, 6, 37);
        display: block;
        transition: all 0.5s ease;
        filter: brightness(1.1) contrast(1.1) saturate(1.2);
        position: relative;
        z-index: 2;
      }

      .me-img:hover {
        filter: brightness(1.3) contrast(1.2) saturate(1.4);
        transform: scale(1.02);
      }

      @keyframes gradientShift {
        0% {
          background-position: 0% 50%;
        }
        25% {
          background-position: 100% 50%;
        }
        50% {
          background-position: 100% 100%;
        }
        75% {
          background-position: 0% 100%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 0.3;
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          opacity: 0.6;
          transform: translate(-50%, -50%) scale(1.1);
        }
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
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
          animation-duration: 6s;
        }

        .particle {
          width: 3px;
          height: 3px;
        }

        .scan-line {
          height: 1px;
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
          border-radius: 15px;
        }

        .particle {
          width: 2px;
          height: 2px;
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
