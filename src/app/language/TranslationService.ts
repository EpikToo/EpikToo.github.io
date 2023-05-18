import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any;

  constructor(private http: HttpClient) { }

  getTranslations(language: string) {
    return this.http.get<any>(`${language}.json`);
  }
}