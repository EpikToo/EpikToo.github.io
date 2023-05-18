import { Component } from '@angular/core';
import { TranslationService } from './language/TranslationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Portofolio";
  isEnglish: boolean = true;
  
  switchLanguage() {
    this.isEnglish = !this.isEnglish;

    if (this.isEnglish) {
      // Logique pour passer à la langue anglaise
    } else {
      // Logique pour passer à la langue française
    }
  }
}
