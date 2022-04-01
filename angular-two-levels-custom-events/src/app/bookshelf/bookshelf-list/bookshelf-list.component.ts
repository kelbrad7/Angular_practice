import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css']
})
export class BookshelfListComponent implements OnInit {
  books: {
    title: string,
    author: string,
  }[] =
  [
    {title: "book 1",
    author: "author 1"},
    {title: "book 2",
    author: "author 2"},
    {title: "book 3",
    author: "author 3"}
  ]

  @Output() emitBook = new EventEmitter<{title:string, author:string}>();
  chosenBook:{title: string, author: string};

  constructor() { }

  ngOnInit(): void {
  }

  chooseBook (chosenBook: any) {
    this.emitBook = chosenBook;
    console.log(chosenBook)
  }
  }




