import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  data: any = {};

  private _dataLoaded = new BehaviorSubject<boolean>(false);
  dataLoaded$ = this._dataLoaded.asObservable();

  constructor(private http: HttpClient) {}

  use(lang: string): void {
    const langPath = `assets/i18n/${lang || 'en'}.json`;

    this.http.get(langPath).subscribe(
      (translation: any) => {
        this.data = Object.assign({}, translation || {});
        this._dataLoaded.next(true);
      },
      (error: any) => {
        this.data = {};
        console.error(error);
      }
    );
  }

  translate(key: string): string {
    return this.data[key] || key;
  }
}