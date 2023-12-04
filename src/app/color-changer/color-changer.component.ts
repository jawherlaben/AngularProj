import { Component } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent {
  divColor: string = 'transparent'; // Default color

  changeColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.divColor = input.value;
  }
  

  resetColor() {
    this.divColor = 'transparent'; // Or any default color
  }
}
