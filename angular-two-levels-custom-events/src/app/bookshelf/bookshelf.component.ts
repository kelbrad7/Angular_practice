import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  emittedBook: {title: string, author: string};

  @Output() emitEmittedBook = new EventEmitter <any>();


  constructor() { }

  ngOnInit() {
  }

assignBook (book: {title: string, author: string}){
  this.emittedBook = book;
}

  emitFinalBook(emittedBook:any){
  this.emitEmittedBook.emit(this.emittedBook);

}

}
