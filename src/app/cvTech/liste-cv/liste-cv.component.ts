import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent{

  @Input() personnes : Personne[] = [] ;
  @Output() selectedPersonne = new EventEmitter<Personne>();


  selectPersonne(selectedPersonne:Personne)
  {
    this.selectedPersonne.emit(selectedPersonne)
  }
}
