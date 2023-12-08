import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne !: Personne;

  constructor(
    private cvService: CvService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (response) => {
        this.personnes = response;
      },
    );
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }


  
  

}
