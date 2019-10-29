import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
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
  add(name: string, releaseYear: number): void {
    name = name.trim();
    if (Number.isNaN(Number(releaseYear)) || !name || Number(releaseYear) === 0 ) {
      alert ('name must not be blank, Release year must not be number');
      return;
    }
    const newBook: Book = new Book();
    newBook.name = name;
    newBook.releaseYear = releaseYear;
    this.bookService.addBook(newBook).subscribe(insertedBook => {
      this.books.push(insertedBook);
    });
  }
  delete(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(_ =>
      this.books = this.books.filter(book => book.id !== bookId)
    );
  }
}
