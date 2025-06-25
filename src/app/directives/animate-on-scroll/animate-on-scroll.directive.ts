import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements OnInit, AfterViewInit {

  @Input() direction: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() speed: number = 0.8;

  private isVisible = false;
  private hasAnimated = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.setInitialStyles();
  }

  ngAfterViewInit() {
    if (!this.hasAnimated) {
      setTimeout(() => {
        this.checkVisibility();
      }, 100);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!this.hasAnimated) {
      this.checkVisibility();
    }
  }

  private setInitialStyles() {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'opacity', '0');
    this.renderer.setStyle(el, 'transition', `transform ${this.speed + 1}s ease-out, opacity ${this.speed + 1}s ease-out`);
    this.renderer.setStyle(el, 'will-change', 'transform, opacity');

    switch (this.direction) {
      case 'top':
        this.renderer.setStyle(el, 'transform', 'translateY(-100px)');
        break;
      case 'bottom':
        this.renderer.setStyle(el, 'transform', 'translateY(20px)');
        break;
      case 'left':
        this.renderer.setStyle(el, 'transform', 'translateX(-100px)');
        break;
      case 'right':
        this.renderer.setStyle(el, 'transform', 'translateX(100px)');
        break;
      default:
        this.renderer.setStyle(el, 'transform', 'translateY(100px)');
    }
  }

  private checkVisibility() {
    if (this.hasAnimated) return;

    const el = this.el.nativeElement;
    if (typeof el.getBoundingClientRect !== 'function') return;

    const position = el.getBoundingClientRect();
    if (position.top < window.innerHeight && !this.isVisible) {
      this.isVisible = true;
      this.hasAnimated = true;

      this.renderer.setStyle(el, 'opacity', '1');
      this.renderer.setStyle(el, 'transform', 'translate(0)');
    }
  }
}
