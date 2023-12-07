import { Component } from '@angular/core';
import { CvService } from '../cv.service';
import { Personne } from 'src/app/Model/Personne';
import { ActivatedRoute, Router } from '@angular/router';
import { EmbaucheService } from '../embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-informations-cv',
  templateUrl: './informations-cv.component.html',
  styleUrls: ['./informations-cv.component.css']
})
export class InformationsCvComponent {

  personne!: Personne;

  constructor(
    private cvService:CvService,
    private route: ActivatedRoute,
    private router: Router,
    private embaucheService : EmbaucheService,
    private toastr: ToastrService

  )
  {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.cvService.getPersonneById(id).subscribe(
      (response) => {
        this.personne = response;
      },
      (err) => {
        this.router.navigate(['**']); // où /details/:id est le chemin dans votre configuration de route
      }
    );
  }

  deletePersonne() { 
    this.embaucheService.deleteEmbauche(this.personne.id);
    this.cvService.deletePersonne(this.personne.id)
    this.router.navigate(['cvTech'])
  }

  retour() { 
      this.router.navigate(['cvTech']);
  }
}
