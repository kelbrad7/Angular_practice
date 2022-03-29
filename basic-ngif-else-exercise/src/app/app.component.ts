import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-ngif-else-exercise';
  isShowContent: boolean= true;
  changeShowContent =() => this.isShowContent = !this.isShowContent
}
