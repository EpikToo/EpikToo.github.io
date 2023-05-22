import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-miscinfos',
  templateUrl: './miscinfos.component.html',
  styleUrls: ['./miscinfos.component.css']
})
export class MiscinfosComponent {
  constructor(public translationService: TranslationService) { }
}
