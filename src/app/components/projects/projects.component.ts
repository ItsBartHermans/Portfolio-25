import { Component } from '@angular/core';
import { Project, ProjectRowComponent } from './project-row/project-row.component';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectRowComponent, AnimateOnScrollDirective],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: '.GIFSplash',
      description: `Developed as a school project during my third year at HvA, this app was built by a team of four. 
      It was a great experience in collaboration and teamwork. The most fun I had was with designing and implementing 
      the websocket system. The project also challenged me with several interesting coding problems and helped me grow 
      as a developer.`,
      urls: [
        { url: 'https://github.com/ItsBartHermans/gifsplash-frontend', label: 'View frontend on GitHub' },
        { url: 'https://github.com/ItsBartHermans/gifsplash-backend', label: 'View backend on GitHub' },
      ],

      imageUrl: 'assets/images/gifsplash.png'
    },
    {
      title: 'Portfolio Website',
      description: `This portfolio was a personal project driven by my desire to have my own website. 
      Building it was a fun experience, allowing me to showcase my skills and projects. 
      It also helped me improve my front-end development skills and explore new design techniques.`,
      urls: [
        { url: 'https://github.com/ItsBartHermans/Portfolio-25', label: 'View on GitHub' }
      ],
      imageUrl: 'assets/images/portfolio.jpg'
    },
    {
      title: 'Atlantis 7',
      description: `During my internship at DEVENTit, I contributed to Atlantis 7, a leading platform for collection management and online presentation of diverse heritage collections. 
      The platform supports a wide range of collections—from archives, museums, and image collections to handwritten and printed sources, art, literature, building files, deeds, and registers. 
      Working on Atlantis 7 gave me valuable experience in debugging and tracing issues within large codebases, as well as designing new systems.`,
      urls: [],
      imageUrl: 'assets/images/naturalis.jpg'
    }
  ];
}
