import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-csharp.min.js';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
  selector: 'app-who-am-i',
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './who-am-i.component.html',
})
export class WhoAmIComponent implements AfterViewInit {
  readonly code = `
    public class BartHermans
    {
        public string Name => "Bart Hermans";
        public string Title => "Software Engineer";
        public string[] Skills => new[] { "Java", "Angular", "C#" };
        public string Location => "IJmuiden, Netherlands";

        public void IntroduceYourself()
        {
            Console.WriteLine($"Hi, I'm {Name}, a {Title} based in {Location}.");
            Console.WriteLine("I enjoy building elegant apps and scalable systems.");
            Console.WriteLine("Some of my key skills include:");
            foreach (var skill in Skills)
            {
                Console.WriteLine($"- {skill}");
            }
        }
    }
  `;

  highlightedCode = '';
  readonly languageIdentifier = 'csharp';

  outputLines: string[] = [];
  private readonly linesToPrint: string[] = [
    "Hi, I'm Bart Hermans, a Software Engineer based in IJmuiden, Netherlands.",
    "I enjoy building elegant apps and scalable systems.",
    "Some of my key skills include:",
    "- Java",
    "- Angular",
    "- C#"
  ];

  isRunning = false;

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.highlightedCode = Prism.highlight(
      this.code,
      Prism.languages[this.languageIdentifier],
      this.languageIdentifier
    );
    this.cd.detectChanges();
  }

  startPrinting(): void {
    if (this.isRunning) return;

    this.isRunning = true;
    this.outputLines = [];

    let index = 0;
    const delay = 100;

    const printNextLine = () => {
      if (index < this.linesToPrint.length) {
        this.outputLines.push(this.linesToPrint[index]);
        index++;
        setTimeout(printNextLine, delay);
      } else {
        this.isRunning = false;
      }
      this.cd.detectChanges();
    };

    printNextLine();
  }
}
