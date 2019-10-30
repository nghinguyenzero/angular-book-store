import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book';
//Router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../../servieces/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  @Input() book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBookFromRoute();
  }
  getBookFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.bookService.getBookFromId(id).subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }
  onSave(): void {
    this.bookService.updateBook(this.book).subscribe(() => this.goBack());
  }

}
