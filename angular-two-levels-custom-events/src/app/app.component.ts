import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  finalBook:any;
  bookTitle: string = "";
  bookAuthor: string = "";


  receiveFinalBook(emittedBook: {title: string, author: string}){
    this.finalBook = emittedBook;
    this.bookTitle = this.finalBook.title;
    this.bookAuthor = this.finalBook.author;
    console.log (this.finalBook);
  }
}
