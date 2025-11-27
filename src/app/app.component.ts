import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, LandingPageComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'MyPortfolio';

  ngOnInit() {
    // Scroll to top when the component loads (page refresh)
    window.scrollTo(0, 0);
  }
}
