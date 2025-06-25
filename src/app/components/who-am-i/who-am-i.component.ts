import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-csharp.min.js';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
  selector: 'app-who-am-i',
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './who-am-i.component.html',
})
export class WhoAmIComponent implements AfterViewInit {
  @ViewChild('codeContainer') codeContainer!: ElementRef<HTMLElement>;
  @ViewChild('hiddenFullCode') hiddenFullCode!: ElementRef<HTMLElement>;

  codeContainerHeight = 'auto';

  readonly fullCode = `
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
  highlightedHiddenCode = '';
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

  isRunning = true;
  private currentIndex = 0;
  displayedCode = '';

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.highlightedHiddenCode = Prism.highlight(
      this.fullCode,
      Prism.languages[this.languageIdentifier],
      this.languageIdentifier
    );

    setTimeout(() => {
      this.codeContainerHeight = this.hiddenFullCode.nativeElement.offsetHeight + 'px';
      this.cd.detectChanges();
    }, 1);
  }

  onReveal() {
    this.startTyping();
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

  startTyping(): void {
    this.isRunning = true;
    this.currentIndex = 0;
    this.displayedCode = '';
    this.typeNextChar();
  }

  private typeNextChar(): void {
    if (this.currentIndex < this.fullCode.length) {
      this.displayedCode += this.fullCode[this.currentIndex];
      this.currentIndex++;

      // Highlight current displayed code
      this.highlightedCode = Prism.highlight(
        this.displayedCode,
        Prism.languages[this.languageIdentifier],
        this.languageIdentifier
      );

      this.cd.detectChanges();

      setTimeout(() => this.typeNextChar(), 5);
    } else {
      this.isRunning = false;
      this.cd.detectChanges();
    }
  }
}
