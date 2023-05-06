import { Directive, ElementRef, OnInit, Renderer2, Input, Inject } from '@angular/core';
import { getRandomTypingInt } from './utils';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appShowText]'
})
export class ShowTextDirective implements OnInit {
  @Input() delay: string = '0';
  @Input() cursor: string = ""; // Passer le sélecteur du curseur comme string

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'hidden-text'); // Cache le texte au départ
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement, 'hidden-text'); // Montre le texte avant de commencer à écrire
      this.showText();
    }, parseInt(this.delay, 10));
  }

  showText() {
    const originalText = this.el.nativeElement.textContent;
    let displayedText = '';
    let charIndex = 0;

    const showNextChar = () => {
      if (charIndex < originalText.length) {
        displayedText += originalText[charIndex];
        this.renderer.setProperty(this.el.nativeElement, 'textContent', displayedText);
        charIndex++;
        setTimeout(showNextChar, getRandomTypingInt());
      } else if (this.cursor) { // Si le curseur est présent
        const cursorElement = this.document.querySelector(this.cursor); // Obtenez l'élément du curseur
        if (cursorElement) {
          cursorElement.classList.add('blink'); // Faites clignoter le curseur
        }
      }
    };

    this.renderer.setProperty(this.el.nativeElement, 'textContent', '');
    showNextChar();
  }
}