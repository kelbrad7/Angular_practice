import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchInput = '';

  @Output() emitSearchInput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  clickSearchInput (searchInput:any){
this.emitSearchInput.emit(searchInput);
  }


}
