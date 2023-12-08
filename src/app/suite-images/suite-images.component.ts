// image-carousel.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ImageLoaderService } from '../services/image-loader.service';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './suite-images.component.html',
  styleUrls: ['./suite-images.component.css']
})
export class SuiteImagesComponent implements OnInit {

  imageI !: String;

  private images: string[] = [
    'insat1.jpeg',
    // '',
    'insat2.jpg',
    'insat3.jpeg',
    'insat4.jpeg',
    'insat5.jpeg',
  ];
  observable!: Observable<string> ;


  ngOnInit(): void {

    this.observable = new Observable(
      (observer) => {
        let i = this.images.length-1;
        setInterval(
          ()=>{
            observer.next(this.images[i]);
            i--;
            if(i<0)
            {
              i = this.images.length-1;
            }
          }
        ,1000)

      }
    );

    this.observable.subscribe(
      (result) =>
      {
        this.imageI = result;
      })
  }

  
}
