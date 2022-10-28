import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document:Document) { 
    this.document=document
  }

  ngOnInit(): void {
  }
  document:any
  name='Praveen'
  send=undefined
  todaydate =new Date();
  isShown:boolean=false
  sendmoney(event:any){
      alert(this.send)
  }

  toggleShow() {

    this.isShown = !this.isShown;
    
    }
    tself(event:any){
      this.document.getElementById("self").scrollIntoView();
      window.scrollTo(0, 580);
    }
    balanc(event:any){
      this.document.getElementById("cbal").scrollIntoView();
      window.scrollTo(0, 800);
    }
    tbank(event:any){
      this.document.getElementById("tba").scrollIntoView();
      window.scrollTo(0,280);
    }
    
}
