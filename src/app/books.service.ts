import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, retry, Subject, tap, throwError } from 'rxjs';
import { Books } from '../books'
import { BooksSearchComponent } from './books-search/books-search.component';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksUrl = 'https://www.googleapis.com/books/v1/volumes?q='

  getBooks(name:string='Harry Porter'): Observable<any>{
    return this.http.get<any>(`${this.booksUrl}${name}`)
  }
  
   constructor(private http: HttpClient) { }
 }
