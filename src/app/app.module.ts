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
import { ProjectsinfoComponent } from './projectsinfo/projectsinfo.component';
import { PictureinfoComponent } from './pictureinfo/pictureinfo.component';
import { FlorianinfoComponent } from './florianinfo/florianinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    NameinfoComponent,
    ProfileinfoComponent,
    ExperienceinfoComponent,
    StudiesinfoComponent,
    PassionsinfoComponent,
    MiscinfosComponent,
    ProjectsinfoComponent,
    ShowTextDirective,
    PictureinfoComponent,
    FlorianinfoComponent
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
