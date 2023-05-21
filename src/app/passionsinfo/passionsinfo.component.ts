import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-passionsinfo',
  templateUrl: './passionsinfo.component.html',
  styleUrls: ['./passionsinfo.component.css']
})
export class PassionsinfoComponent {
  constructor(public translationService: TranslationService) {}
}
