import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  emittedBook = ''

  constructor() { }

  ngOnInit(): void {
  }
  assignBook (chosenBook:any) {
  this.emittedBook = chosenBook};

}
