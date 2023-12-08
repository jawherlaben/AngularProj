import { Pipe, PipeTransform } from '@angular/core';
import { SuiteImagesComponent } from './suite-images/suite-images.component';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(path: String): String {
    return path.trim() ? path : 'unavailable-image.jpg';
  }

}
