import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-card-row',
  imports: [],
  templateUrl: './stack-card-row.component.html',
  styleUrl: './stack-card-row.component.css'
})
export class StackCardRowComponent {
  @Input() title: string = '';
  @Input() iconPath: string = '';
}
