import { Component } from '@angular/core';
import { Project, ProjectRowComponent } from './project-row/project-row.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectRowComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'GIF Battle App',
      description: 'A fun game where users battle using GIFs.',
      githubUrl: 'https://github.com/your-username/gif-battle',
      imageUrl: 'assets/images/gifsplash.png'
    },
    {
      title: 'Portfolio Website',
      description: 'A clean portfolio to showcase my projects.',
      githubUrl: 'https://github.com/ItsBartHermans/Portfolio-25',
      imageUrl: 'assets/images/portfolio.jpg'
    },
    // Add more projects here...
  ];
}
