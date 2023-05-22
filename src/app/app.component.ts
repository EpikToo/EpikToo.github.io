import { Component, OnInit } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public translationService: TranslationService) { }

  ngOnInit() {
    const storedLang = localStorage.getItem('selectedLang');
    if (storedLang) {
      this.translationService.use(storedLang);
    } else {
      this.translationService.use('fr');
    }
  }

  useFrench() {
    this.translationService.use('fr');
    localStorage.setItem('selectedLang', 'fr');
    this.reloadPage();
  }

  useEnglish() {
    this.translationService.use('en');
    localStorage.setItem('selectedLang', 'en');
    this.reloadPage();
  }

  private reloadPage(): void {
    location.reload();
  }
}