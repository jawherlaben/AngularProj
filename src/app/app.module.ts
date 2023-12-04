import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importez ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';

import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';

import { ColorChangerComponent } from './color-changer/color-changer.component';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { InformationsCvComponent } from './cvTech/informations-cv/informations-cv.component';
import { ErrorComponent } from './error/error.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { SuiteImagesComponent } from './suite-images/suite-images.component';
import { AuthentificationTemplateDrivenComponent } from './authentification-template-driven/authentification-template-driven.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    ColorChangerComponent,
    EmbaucheComponent,
    NavbarComponent,
    TodosComponent,
    InformationsCvComponent,
    ErrorComponent,
    AddCvComponent,
    SuiteImagesComponent,
    AuthentificationTemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
