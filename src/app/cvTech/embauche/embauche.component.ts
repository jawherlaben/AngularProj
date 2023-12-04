import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from '../embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit{

  protected embauchers: Personne[] = [];

  @Input()
  embaucher!: Personne;

  constructor(private embaucheService : EmbaucheService,
    private toastr: ToastrService
    )
  {
    console.log("constructor embauche.component");
  }
  ngOnInit(): void {
    
    this.embaucheService.getEmbauches().subscribe(embauches => {
      this.embauchers = embauches;
    });

  }

  
}


