import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,@Inject(DOCUMENT) document:Document) { 
    this.document=document
  }
  document:any;
  ngOnInit(): void {
  }

  mobilen(){
    this.router.navigate(['/data']);
    // this.document.getElementById("test").scrollIntoView();
  }
  tobank(){
    this.router.navigate(['/data']);
  }

  toTop(event:any) {
    this.document.getElementById("content").scrollIntoView();
  }

  scrl(event:any){
    this.document.getElementById("test").scrollIntoView();
  }
  
}
