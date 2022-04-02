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
    {title: "Black Border Collie",
    author: "Ruby"},
    {title: "Red Border Collie",
    author: "Maggie"},
    {title: "Mini Aussie",
    author: "Zoe"}
  ]

  @Output() emitBook = new EventEmitter<{title: string, author: string}>();

bookTitle: string = "";
bookAuthor: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  chooseBook(book:{title: string, author: string}) {
    this.emitBook.emit(book);

  }
  }




