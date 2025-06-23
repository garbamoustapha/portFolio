import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabBarComponent } from '../components/tabBar.component';
import { HomeComponent } from '../components/home.component';
import { AboutMeComponent } from '../components/aboutme.component';
import { SkillsComponent } from '../components/skils.component';
import { HobbiesComponent } from '../components/hobbies.component';
import { ExperinceAndEductionComponent } from '../components/experinceAndEduction.component';
import { ContactComponent } from '../components/contact.component';
import { FooterComponent } from '../components/footer.component';
import { GamerBackgroundComponent } from '../components/gamer-background.component';
import { SectionDividerComponent } from '../components/section-divider.component';
import { LoadingManagerComponent } from '../components/loading-manager.component';
import { ToolsTechnologiesComponent } from '../components/tools-technologies.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TabBarComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    HobbiesComponent,
    ExperinceAndEductionComponent,
    ContactComponent,
    FooterComponent,
    GamerBackgroundComponent,
    SectionDividerComponent,
    LoadingManagerComponent,
    ToolsTechnologiesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portFolio';
}
