import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamcially-change-content-ngstyle-exercise';
  changeColor: string = 'green'
  colorFunction = (event:any) => this.changeColor = event.target.value
}
