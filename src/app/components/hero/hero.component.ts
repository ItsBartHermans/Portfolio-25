import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
  selector: 'app-hero',
  imports: [AnimateOnScrollDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
