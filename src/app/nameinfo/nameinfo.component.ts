import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-nameinfo',
  templateUrl: './nameinfo.component.html',
  styleUrls: ['./nameinfo.component.css']
})

export class NameinfoComponent implements OnInit {
  @ViewChild('terminalContent', { static: false }) terminalContent!: ElementRef;

  ngOnInit() {
    const typedOptions = {
      strings: [
        'Bienvenue sur mon portfolio.',
        'Je suis développeur web.',
        'Voici quelques-uns de mes projets...'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
      cursorChar: '',
      contentType: 'text',
    };

    const typed = new Typed(this.terminalContent.nativeElement, typedOptions);
  }
}
