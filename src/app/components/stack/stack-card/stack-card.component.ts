import { Component, Input } from '@angular/core';
import { StackCardRowData, StackCardRowComponent } from '../stack-card-row/stack-card-row.component';
import { CommonModule } from '@angular/common';
import { ProjectRowComponent } from "../../projects/project-row/project-row.component";

export interface StackData {
  title: string;
  icon: string;
  rows: StackCardRowData[];
}

@Component({
  selector: 'app-stack-card',
  imports: [CommonModule, StackCardRowComponent],
  templateUrl: './stack-card.component.html'
})
export class StackCardComponent {
  @Input() data!: StackData;
}
