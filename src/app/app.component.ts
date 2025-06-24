import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { WhoAmIComponent } from "./components/who-am-i/who-am-i.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeroComponent, NavbarComponent, WhoAmIComponent]
})
export class AppComponent {
}
