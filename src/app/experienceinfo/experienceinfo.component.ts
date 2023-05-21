import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-experienceinfo',
  templateUrl: './experienceinfo.component.html',
  styleUrls: ['./experienceinfo.component.css']
})
export class ExperienceinfoComponent {
  constructor(public translationService: TranslationService) {}
}
