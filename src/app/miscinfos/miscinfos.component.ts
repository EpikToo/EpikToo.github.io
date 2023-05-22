import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-miscinfos',
  templateUrl: './miscinfos.component.html',
  styleUrls: ['./miscinfos.component.css']
})
export class MiscinfosComponent implements OnInit {
  dataLoaded = false;

  constructor(public translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.dataLoaded$.subscribe(isLoaded => {
      this.dataLoaded = isLoaded;
    });
  }

}
