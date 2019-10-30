import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookService } from './servieces/book.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    MessagesComponent,
    DashboardComponent,
    BookSearchComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    BookListComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BookService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
