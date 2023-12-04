import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
  @Input()
  personne!: Personne;

  @Output() selectedPersonne = new EventEmitter();
  ngOnInit(){
  }
  
  selectPersonne()
  {
    this.selectedPersonne.emit(
      this.personne
    );
  }

}
