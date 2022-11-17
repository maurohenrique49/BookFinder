import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit {
  warn = false
  @Input() isChecked?: boolean

  constructor(
    private router: Router,
    private bookservice: BooksService,
  ) {}
  
  searchBook(term:string){
    if(term != '')
    this.router.navigateByUrl(`/list/${term}`)
      .then(() =>{
        window.location.reload();
      })
    else{
      this.warn = true
    }
  }

  ngOnInit(): void {
    
  }

}
