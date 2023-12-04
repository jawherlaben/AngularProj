// image-loader.service.ts
import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {
  private imageUrls: string[] = [
    'assets/img/insat1.jpeg',
    'assets/img/insat2.jpeg',
    'assets/img/insat3.jpeg',
    'assets/img/insat4.jpeg',
    'assets/img/insat5.jpeg',
  ];
  private currentIndex: number = 0;

  constructor() {}

  getImageStream(intervalTime: number): Observable<string> {
    return interval(intervalTime).pipe(
      map(() => {
        const imageUrl = this.imageUrls[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
        return imageUrl;
      })
    );
  }
}
