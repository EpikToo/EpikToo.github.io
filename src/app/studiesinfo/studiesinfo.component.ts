import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-studiesinfo',
  templateUrl: './studiesinfo.component.html',
  styleUrls: ['./studiesinfo.component.css']
})
export class StudiesinfoComponent {
  constructor(public translationService: TranslationService) {}
}
