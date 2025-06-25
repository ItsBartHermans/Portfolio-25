import { Component } from '@angular/core';
import { StackData, StackCardComponent } from './stack-card/stack-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack',
  imports: [StackCardComponent, CommonModule],
  templateUrl: './stack.component.html'
})
export class StackComponent {
  stackCards: StackData[] = [
    {
      title: 'Frontend',
      icon: 'fa-solid fa-code',
      rows: [
        { title: 'Angular', icon: 'fa-brands fa-angular' },
        { title: 'Vue.js', icon: 'fa-brands fa-vuejs' },
        { title: 'Flutter', icon: 'fa-brands fa-flutter' },
        { title: 'Kotlin', icon: 'fa-solid fa-mobile' },
        { title: 'Tailwind', icon: 'fa-brands fa-css3-alt' },
        { title: 'TypeScript', icon: 'fa-brands fa-js' }
      ]
    },
    {
      title: 'Backend',
      icon: 'fa-solid fa-server',
      rows: [
        { title: 'Node.js', icon: 'fa-brands fa-node-js' },
        { title: 'Spring Boot', icon: 'fa-solid fa-leaf' },
        { title: '.NET Core', icon: 'fa-brands fa-microsoft' },
        { title: 'SQL', icon: 'fa-solid fa-database' },
        { title: 'Firebase', icon: 'fa-solid fa-fire' },
        { title: 'WebSockets', icon: 'fa-solid fa-network-wired' }
      ]
    },
    {
      title: 'Tools',
      icon: 'fa-solid fa-wrench',
      rows: [
        { title: 'Git', icon: 'fa-brands fa-git-alt' },
        { title: 'Docker', icon: 'fa-brands fa-docker' },
        { title: 'Jira', icon: 'fa-solid fa-clipboard-list' },
        { title: 'SonarQube', icon: 'fa-solid fa-square-check' },
        { title: 'Snyk', icon: 'fa-solid fa-shield-halved' },
        { title: 'CI/CD', icon: 'fa-solid fa-gears' }
      ]
    }
  ];
}
