import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
export interface StackCardRowData {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-stack-card-row',
  imports: [CommonModule],
  templateUrl: './stack-card-row.component.html',
})
export class StackCardRowComponent {
  @Input() data!: StackCardRowData;
}
