import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs'; //Subject sreteam
import { Book } from 'src/models/book';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators'; //debounceTime thoi gian giua 2 lan go,
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  books$: Observable<Book[]>; //$ asyncPipe => chay tien trinh rieng, dang goi len server lay du lieu -> van co the go cac text tiep theo
  private searchedSubject = new Subject<string>(); // go mot chu -> nhet string vao stream
  constructor(private bookService: BookService) { }
  search(searchedString: string): void {
    console.log(`searchedSTring =${searchedString}`);
    this.searchedSubject.next(searchedString );
  }
  ngOnInit() {
    this.books$ = this.searchedSubject.pipe(
      debounceTime(300), //wait 300ms after each keystoke before considering the searched string
      distinctUntilChanged(), //ignore new string if same the previous string
      switchMap((searchedString: string) => this.bookService.searchBooks(searchedString))
    );
  }
}
