import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  imageUrl: string;
}

@Component({
  selector: 'app-project-row',
  imports: [CommonModule],
  templateUrl: './project-row.component.html',
})
export class ProjectRowComponent {
  @Input() project!: Project;
}
