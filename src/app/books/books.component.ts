import { provideImageKitLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Books } from '../../books'
import { BooksService } from '../books.service';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}
  imageurl = ''
  size = true
  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {

      if(result.breakpoints[Breakpoints.XSmall]){
        this.imageurl = 'https://ik.imagekit.io/nmbsshnlf/bookimgcell_zOAOZQ9aD?ik-sdk-version=javascript-1.4.3&updatedAt=1665860956865'
        this.size = false
      }
      if(result.breakpoints[Breakpoints.Small]){
        this.imageurl = 'https://ik.imagekit.io/nmbsshnlf/bookimg_KkbfFSFdl.png?tr=w-1280'
        this.size = false
      }
      if(result.breakpoints[Breakpoints.Medium]){
        this.imageurl = 'https://ik.imagekit.io/nmbsshnlf/bookimg_KkbfFSFdl.png?tr=w-1280'
        this.size = false
      }
      if(result.breakpoints[Breakpoints.Large]){
        this.imageurl = 'https://ik.imagekit.io/nmbsshnlf/bookimg_KkbfFSFdl.png?tr=w-1920'
        this.size = true
      }
      if(result.breakpoints[Breakpoints.XLarge]){
        this.imageurl = 'https://ik.imagekit.io/nmbsshnlf/bookimg_KkbfFSFdl.png?tr=w-7680'
        this.size = true
      }
      })
  }

}
