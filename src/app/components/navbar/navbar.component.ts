import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimateOnScrollDirective],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('menuToggle', { static: false }) menuToggle!: ElementRef<HTMLInputElement>;
  @ViewChild('navbar', { static: false }) navbar!: ElementRef<HTMLElement>;

  menuOpen: boolean = false;
  navbarHeight: number = 0;

  ngAfterViewInit() {
    this.navbarHeight = this.navbar.nativeElement.offsetHeight;
  }

  closeMenu() {
    if (this.menuToggle) {
      this.menuToggle.nativeElement.checked = false;
      this.menuOpen = false;
    }
  }

  smoothScrollTo(event: Event, selector: string) {
    event.preventDefault();

    const element = document.querySelector(selector);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - this.navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    this.closeMenu();
  }
}
