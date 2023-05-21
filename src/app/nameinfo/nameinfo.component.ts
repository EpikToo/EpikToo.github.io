import { Component, OnInit  } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-nameinfo',
  templateUrl: './nameinfo.component.html',
  styleUrls: ['./nameinfo.component.css']
})
export class NameinfoComponent implements OnInit {
  dataLoaded = false;

  constructor(public translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.dataLoaded$.subscribe(isLoaded => {
      this.dataLoaded = isLoaded;
    });
  }
}