import { Injectable } from '@angular/core';
import { fakeBooks } from './fake-books';
import { Book } from '../models/book';

//Get data asynchronously with Observable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

//MessageService
import { MessageService } from './message.service';

@Injectable()
export class BookService {
  getBooks(): Observable<Book[]> {
    this.messageService.add(`${ new Date().toLocaleString()}. Get book list`);
    return of(fakeBooks);
  }
  getBookFromId(id: number): Observable<Book> {
    return of(fakeBooks.find(book => book.id === id));
  }
  constructor(public messageService: MessageService) { }

}
