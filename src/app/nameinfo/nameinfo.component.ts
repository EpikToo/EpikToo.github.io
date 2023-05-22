import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-nameinfo',
  templateUrl: './nameinfo.component.html',
  styleUrls: ['./nameinfo.component.css']
})
export class NameinfoComponent {
  constructor(public translationService: TranslationService) { }
}