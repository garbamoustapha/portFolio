import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabBarComponent } from '../components/tabBar.component';
import { HomeComponent } from '../components/home.component';
import {  AboutMeComponent } from '../components/aboutme.component';
import { SkillsComponent } from '../components/skils.component';
import { ExperinceAndEductionComponent } from '../components/experinceAndEduction.component';
import { ContactComponent } from '../components/contact.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    TabBarComponent, 
    HomeComponent, 
    AboutMeComponent, 
    SkillsComponent, 
    ExperinceAndEductionComponent, 
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portFolio';
}
