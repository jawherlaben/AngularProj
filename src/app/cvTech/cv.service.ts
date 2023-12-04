import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personne } from 'src/app/Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = 'https://apilb.tridevs.net/api/personnes';

  private personnesSubject: BehaviorSubject<Personne[]> = new BehaviorSubject<Personne[]>([]);
  personnes$: Observable<Personne[]> = this.personnesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchAndStorePersonnes();
  }

  getPersonnes(): Observable<Personne[]> {
    return this.personnes$;
  }

  private fetchAndStorePersonnes() {
    this.getPersonnesFromAPI().subscribe(
      (data) => {
        this.personnesSubject.next(data);
      },
      (error) => {
        console.error('Erreur lors de la récupération des personnes', error);
        this.personnesSubject.next([
          new Personne("Name 1 ","Firstname 1","job1","",1,11,1111),
          new Personne("Name 2 ","Firstname 2","job2","",2,22,2222),
          new Personne("Name 3 ","Firstname 3","job3","",3,33,3333),          
        ]);
      }
    );
  }

  getPersonnesFromAPI(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiUrl);
  }

  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.apiUrl}/${id}`);
  }

  deletePersonne(id: number): void {
    const newPersonnes = this.personnesSubject.value.filter(
      (personne) => personne.id !== id
    );
    this.personnesSubject.next(newPersonnes);
  }
}
