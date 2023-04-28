import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NameinfoComponent } from './nameinfo/nameinfo.component';
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { ExperienceinfoComponent } from './experienceinfo/experienceinfo.component';
import { StudiesinfoComponent } from './studiesinfo/studiesinfo.component';
import { PassionsinfoComponent } from './passionsinfo/passionsinfo.component';
import { MiscinfosComponent } from './miscinfos/miscinfos.component';


@NgModule({
  declarations: [
    AppComponent,
    NameinfoComponent,
    ProfileinfoComponent,
    ExperienceinfoComponent,
    StudiesinfoComponent,
    PassionsinfoComponent,
    MiscinfosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
