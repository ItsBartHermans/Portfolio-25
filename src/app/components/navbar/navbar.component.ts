import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('menuToggle', { static: false }) menuToggle!: ElementRef<HTMLInputElement>;
  menuOpen: boolean = false;

  closeMenu() {
    if (this.menuToggle) {
      this.menuToggle.nativeElement.checked = false;
      this.menuOpen = false;
    }
  }

}
