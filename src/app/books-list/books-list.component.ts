import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from 'src/books';
import { Observable, switchMap } from 'rxjs';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books:any=false
  isChecked = false
  div_num = [1,2,3,4,5,6,7,8,9]
  //tela de loading

  darkMode(val:boolean){
    if(val){
      localStorage.setItem('color', 'DarkMode')
    } else {
      localStorage.removeItem('color')
    }
  }

  getImg(id:string){
    return `https://books.google.com/books/content/images/frontcover/${id}?fife=w240-h300` 
  }

  getBooks(book:string){
    setTimeout(
              () => this.booksService.getBooks(book)
                        .subscribe(books => this.books = books), 2000)
  }

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private render: Renderer2,
    
    ) {}

  ngOnInit(): void {
    if(localStorage.length > 0){
      this.isChecked = true
    }    
    const book = String(this.route.snapshot.paramMap.get('book'))
    this.getBooks(book)
  }

}
