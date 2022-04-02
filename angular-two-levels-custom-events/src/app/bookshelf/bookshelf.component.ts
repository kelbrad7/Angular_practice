import { Component, OnInit, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  emittedBook: {title:string, author:string};

  constructor() { }

  ngOnInit() {
  }

assignBook (chosenBook: {title:string, author: string}){
  this.emittedBook = chosenBook;
  console.log(this.emittedBook);
}

}
