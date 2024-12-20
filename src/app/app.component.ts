import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabBarComponent } from '../components/tabBar.component';
import { HomeComponent } from '../components/home.component';
import {  AboutMeComponent } from '../components/aboutme.component';
import { SkillsComponent } from '../components/skils.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabBarComponent, HomeComponent, AboutMeComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portFolio';
}
