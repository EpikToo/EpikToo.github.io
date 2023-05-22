import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.css']
})
export class ProfileinfoComponent implements OnInit{
  dataLoaded = false;

  constructor(public translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.dataLoaded$.subscribe(isLoaded => {
      this.dataLoaded = isLoaded;
    });
  }
}
