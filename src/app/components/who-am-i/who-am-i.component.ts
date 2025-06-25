import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import * as Prism from 'prismjs'
import 'prismjs/components/prism-csharp.min.js';

@Component({
  selector: 'app-who-am-i',
  imports: [CommonModule],
  templateUrl: './who-am-i.component.html',
})
export class WhoAmIComponent implements AfterViewInit {
  code = `
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

  highlightedCode: string = '';
  languageIdentifier: string = 'csharp';

  outputLines: string[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.highlightedCode = Prism.highlight(this.code, Prism.languages[this.languageIdentifier], this.languageIdentifier);
    this.cd.detectChanges();
  }

  isRunning = false;

  startPrinting() {
    if (this.isRunning) return;

    this.isRunning = true;
    this.outputLines = [];

    const lines = [
      "Hi, I'm Bart Hermans, a Software Engineer based in IJmuiden, Netherlands.",
      "I enjoy building elegant apps and scalable systems.",
      "Some of my key skills include:",
      "- Java",
      "- Angular",
      "- C#"
    ];

    let index = 0;

    const printNextLine = () => {
      if (index < lines.length) {
        this.outputLines.push(lines[index]);
        index++;

        const delay = 100;
        setTimeout(printNextLine, delay);
      } else {
        this.isRunning = false;
      }
    };

    printNextLine();
  }
}
