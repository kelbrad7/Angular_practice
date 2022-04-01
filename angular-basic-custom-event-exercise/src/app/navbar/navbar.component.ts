import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mySearch: string= '';
  @Output () emitUserInput = new EventEmitter<string>();
  outputSearch: string = ''

  constructor() { }

  ngOnInit(): void {
  }
  onInput(mySearch: string){
  this.emitUserInput.emit(this.mySearch)

  }
}
