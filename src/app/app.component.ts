import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { WhoAmIComponent } from "./components/who-am-i/who-am-i.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { StackComponent } from "./components/stack/stack.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeroComponent, NavbarComponent, WhoAmIComponent, ProjectsComponent, StackComponent]
})
export class AppComponent {
}
