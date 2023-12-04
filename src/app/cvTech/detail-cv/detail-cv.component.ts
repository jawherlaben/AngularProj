import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from '../embauche.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit{

  constructor(
    private embaucheService : EmbaucheService,
    private router: Router,
    private toastr: ToastrService
    )
  {

  }

  ngOnInit(): void {
  }

  @Input({required: true}) personne !: Personne;

  embauchePersonne(){
    this.embaucheService.addEmbauche (this.personne);
  }

  debaucherPersonne(){
    console.log(this.embaucheService.embauches$);
    this.embaucheService.deleteEmbauche(this.personne.id);

  }

  navigateToDetails(personne: Personne) {
    this.router.navigate(['/cvTech', personne.id]); // où /details/:id est le chemin dans votre configuration de route
  }
}
