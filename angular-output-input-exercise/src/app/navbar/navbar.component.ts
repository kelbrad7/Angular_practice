import { Component, Input, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchInput = '';

  @Input() emitSearchInput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  clickSearchInput (searchInput:any){
this.emitSearchInput.emit (searchInput)
  }


}
