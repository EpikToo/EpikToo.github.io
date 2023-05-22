import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-florianinfo',
  templateUrl: './florianinfo.component.html',
  styleUrls: ['./florianinfo.component.css']
})
export class FlorianinfoComponent {
  constructor(public translationService: TranslationService) {}
}
