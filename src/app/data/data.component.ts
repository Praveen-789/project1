import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, timeout } from 'rxjs';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  constructor(@Inject(DOCUMENT) document:Document,private router:Router) { 
    this.document=document
  }

  ngOnInit(): void {
  }
  document:any
  name='Praveen'
  send=undefined
  todaydate =new Date();
  isShown:boolean=false
  mobilen=undefined
  amount=undefined
  x=this.amount
  str=undefined
  str2=undefined
  status:any;   
  money:Observable<any> | undefined 
  sendmoney(event:any){
      alert(this.send)
  }

  toggleShow() {

    this.isShown = !this.isShown;
    this.str=this.mobilen;
    this.str2=this.amount

    
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

    done(){
      alert('Mobile Number:'+this.mobilen + '\n' +'Amount:'+this.amount) ;
      this.str=this.mobilen;
      this.str2=this.amount
       this.money=new Observable(observer=>{
        
        setTimeout(()=>{
          observer.next('Sending')
        },1000);
          
        setTimeout(()=>{
       observer.next ('Sent')
        },4000);

      })
    this.money.subscribe(val=>
      {this.status=val}
      )
      
      // this.router.navigate(['/show'])
    }
    

}
