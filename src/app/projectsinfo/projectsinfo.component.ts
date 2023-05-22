import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-projectsinfo',
  templateUrl: './projectsinfo.component.html',
  styleUrls: ['./projectsinfo.component.css']
})
export class ProjectsinfoComponent {
  constructor(public translationService: TranslationService) {}
}
