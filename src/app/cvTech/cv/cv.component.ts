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

/*

  ngOnInit(): void {
    console.log(this.cvService.personnes$);
    console.log("ngOnInit");
    this.cvService.getPersonnes().subscribe(
      (response) => {
        this.personnes = response;
        console.log(this.personnes);
      },
      (err) => {
        this.personnes = [
          new Personne("Name 1 ","Firstname 1","job1","none.jpg",1,11,1111),
          new Personne("Name 2 ","Firstname 2","job2","none.jpg",2,22,2222),
          new Personne("Name 3 ","Firstname 3","job3","none.jpg",3,33,3333),          
        ]
        console.error('error', err);
      }
    );
  }*/

  ngOnInit(): void {
    //console.log(this.cvService.personnes$);
    //console.log("ngOnInit");
    this.cvService.getPersonnes().subscribe(
      (response) => {
        this.personnes = response;
        //console.log(this.personnes);
      },
    );
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }


  
  

}
