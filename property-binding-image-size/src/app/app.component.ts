import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-binding-image-size';
  width: number = 200;
  height: number = 250;
  colliePic: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgp2lcNGcjS56XBJ8wNBtsOctljGdMuxi-jblZkTntq_CZfgP5ouKbP0cOhFugJfuC99I&usqp=CAU"
}
