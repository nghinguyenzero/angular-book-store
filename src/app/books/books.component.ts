import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
// import { fakeBooks } from '../fake-books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) {

  }
  getBooksFromServices(): void {
    this.bookService.getBooks().subscribe(updatedBooks => this.books = updatedBooks);
  }
  ngOnInit() {
    this.getBooksFromServices();
  }
}
