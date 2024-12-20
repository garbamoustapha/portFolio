import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  template: `
  <div class="home_container">
    <div class="home_container_data">
      <h3 class="item" style="font-size: 30px;">I am GARBA MOUSTAPHA</h3>
      <h1>Full Stack Developer</h1>
      <p style="color: #9290C3; font-size: 20px;">Frontend, Backend, Mobile and Desktop</p>
      <button class="item button">Contact Me</button>
    </div>
    <div class="home_container_image">
      <div>
        <img src="moi.png" height="280" style="background-color: #1B1A55;" alt="Developer"/>
      </div>
    </div>
  </div>
  `,
  styles: [`
        .home_container{
          display: flex;
          width: 100%;
          padding: 20px;
          justify-content: space-around;
          background-color : #1B1A55;
          margin-top: 30px;
          border-radius: 10px;
          color: white;
        }

        .home_container_data{
          flex-basis: 60%;
        }

        .home_container_data > .item{
          margin: 35px 0;
        }

        .home_container_data h1{
          font-size: 55px;
          background: linear-gradient(90deg,rgb(228, 130, 19),rgb(236, 9, 9));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .home_container_image>div{
          padding: 10px;
          background: linear-gradient(90deg,rgb(228, 130, 19),rgb(236, 9, 9));
          transform :rotate(0.1turn); 
          border-radius: 10px;
        }

        
    `]  
})
export class HomeComponent {
  
}