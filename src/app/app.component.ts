import { Component, OnInit } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataLoaded = false;

  constructor(public translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.use('fr'); // pas besoin de souscrire ici
  
    this.translationService.dataLoaded$.subscribe(isLoaded => {
      this.dataLoaded = isLoaded;
    });
  }

  useFrench() {
    this.translationService.use('fr');
  }

  useEnglish() {
    this.translationService.use('en');
  }
}