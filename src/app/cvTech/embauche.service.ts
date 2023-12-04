// EmbaucheService.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personne } from '../Model/Personne';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embauches: Personne[] = [];
  private embauchesSubject: BehaviorSubject<Personne[]> = new BehaviorSubject<Personne[]>([]);
  embauches$: Observable<Personne[]> = this.embauchesSubject.asObservable();

  constructor(private toastr: ToastrService) { } // Inject ToastrService

  getEmbauches(): Observable<Personne[]> {
    return this.embauches$;
  }

  addEmbauche(embauche: Personne): void {
    if (this.embauches.indexOf(embauche) < 0) {
      this.embauches.push(embauche);
      this.embauchesSubject.next(this.embauches);
      this.toastr.success('Embauché avec succès!', 'Succès'); // Utilisez ToastrService pour afficher un message de succès
    } else {
      this.toastr.error('Ce CV a déjà été sélectionné.', 'Erreur'); // Utilisez ToastrService pour afficher un message d'erreur
    }
  }

  deleteEmbauche(id: number): void {
    this.embauches = this.embauches.filter(embauche => embauche.id !== id);
    this.embauchesSubject.next(this.embauches);
  }
}
