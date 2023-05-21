import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NameinfoComponent } from './nameinfo/nameinfo.component';
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { ExperienceinfoComponent } from './experienceinfo/experienceinfo.component';
import { StudiesinfoComponent } from './studiesinfo/studiesinfo.component';
import { PassionsinfoComponent } from './passionsinfo/passionsinfo.component';
import { MiscinfosComponent } from './miscinfos/miscinfos.component';
import { ShowTextDirective } from './show-text.directive';


@NgModule({
  declarations: [
    AppComponent,
    NameinfoComponent,
    ProfileinfoComponent,
    ExperienceinfoComponent,
    StudiesinfoComponent,
    PassionsinfoComponent,
    MiscinfosComponent,
    ShowTextDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
