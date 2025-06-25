import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { WhoAmIComponent } from "./components/who-am-i/who-am-i.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { StackComponent } from "./components/stack/stack.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeroComponent, NavbarComponent, WhoAmIComponent, ProjectsComponent, StackComponent, FooterComponent]
})
export class AppComponent {
}
