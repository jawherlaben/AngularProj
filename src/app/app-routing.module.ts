import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { TodosComponent } from './todos/todos.component';
import { ErrorComponent } from './error/error.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { InformationsCvComponent } from './cvTech/informations-cv/informations-cv.component';
import { SuiteImagesComponent } from './suite-images/suite-images.component';
import { AuthentificationTemplateDrivenComponent } from './authentification-template-driven/authentification-template-driven.component';
const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'cvTech', component: CvComponent },

  { 
    path: 'cvTech',
    children: [
      { path: ':id', component: InformationsCvComponent },
      { path: 'add', component: AddCvComponent },
    ]
  },
  { path: 'colorChanger', component: ColorChangerComponent },
  { path: 'todo', component: TodosComponent },
  { path: 'images', component:  SuiteImagesComponent},
  { path: 'login', component: AuthentificationComponent },
  {path: 'auth',component : AuthentificationTemplateDrivenComponent},

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
