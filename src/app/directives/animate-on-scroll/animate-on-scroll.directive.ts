import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
  AfterViewInit,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements OnInit, AfterViewInit {

  @Input() direction: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() speed: number = 0.8;

  @Output() animationDone = new EventEmitter<void>();

  private hasAnimated = false;
  private transitionEndListener?: () => void;

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
        this.renderer.setStyle(el, 'transform', 'translateY(50px)');
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

  private checkVisibility(): void {
    if (this.hasAnimated) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const inView = rect.top < window.innerHeight;

    if (inView) {
      this.hasAnimated = true;

      // listen once for transition end, then emit
      this.transitionEndListener = this.renderer.listen(
        this.el.nativeElement,
        'transitionend',
        () => {
          this.animationDone.emit();
          this.transitionEndListener?.(); // remove listener
        }
      );

      // trigger the animation
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0)');
    }
  }
}
