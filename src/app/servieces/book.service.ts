import { Injectable } from '@angular/core';
import { Book } from '../../models/book';

import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';

import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from '../message.service';

import * as Config from './../contants/Config';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class BookService {
  constructor(
    private httpclient: HttpClient,
    public messageService: MessageService) { }
  getBooks(): Observable<Book[]> {
    // this.messageService.add(`${ new Date().toLocaleString()}. Get book list`);
    // return of(fakeBooks);
    return this.httpclient.get<Book[]>(Config.API_URL).pipe(
      tap(receivedBooks => {console.log(`receivedBooks = ${JSON.stringify(receivedBooks)}`); }),
      catchError(error => of([]))
    );
  }
  getBookFromId(id: number): Observable<Book> {
    const url = `${Config.API_URL}/${id}`;
    return this.httpclient.get<Book>(url).pipe(
      tap( selectedBook => {console.log(`selected Book = ${JSON.stringify(selectedBook)}`); }),
      catchError(error => of(new Book()))
    );
    // return of(fakeBooks.find(book => book.id === id));
    // return this.httpclient.get<Book>{url}.pipe(
    //   tap(selectedBook => {console.log(`selected Book = ${JSON.stringify(selectedBook)}`); }),
    //   catchError(error => of(new Book()))
    // )
  }
  updateBook(book: Book): Observable<any> {
    return this.httpclient.put(`${Config.API_URL}/${book.id}`, book, httpOptions).pipe(
      tap(updateBook => console.log(`update book  = ${JSON.stringify(updateBook)}`)),
      catchError( error => of( new Book()))
    );
  }

  addBook(newBook: Book): Observable<Book> {
    return  this.httpclient.post<Book>(Config.API_URL, newBook, httpOptions).pipe(
      tap(book => console.log(`update book  = ${JSON.stringify(book)}`)),
      catchError( error => of( new Book()))
    );
  }
  deleteBook(bookId: number): Observable<Book> {
    const url = `${Config.API_URL}/${bookId}`;
    return  this.httpclient.delete<Book>(url, httpOptions).pipe(
      tap(_ => console.log(`delete book  = ${bookId}`)),
      catchError( error => of(null))
    );
  }
  searchBooks(keyString: string): Observable<Book[]> {
    if (!keyString.trim()) {
      return of([]);
    }
    return this.httpclient.get<Book[]>(`${Config.API_URL}?name_like=${keyString}`).pipe(
      tap(finderBooks => {console.log(`receivedBooks = ${JSON.stringify(finderBooks)}`); }),
      catchError(error => of(null))
    );
  }
}
