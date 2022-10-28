import { Component,  Inject,  OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { createInjectableType } from '@angular/compiler';
import { Router, UrlCreationOptions } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document:Document,private router:Router) { 
this.document=document
  }
name :string='Praveen';
age=undefined
document:any;
x=undefined;
vayas=18;
chk=false;


  ngOnInit(): void {
  }

printdata1(event:any){
  
  alert(this.document.getElementById('tst').value)
  if(this.document.getElementById('tst').value>18)
  {
    document.write("ok")
  }
  else{ 
  document.write("not ok bey")
  }
}
printdata2(event:any)
{
  alert(this.document.getElementById('doctest').value)
}
printdata3(event:any){
  alert(this.x)
}
/*checker(event:any)
{   alert(this.chk)
  this.chk=true
}*/
opennew(event:any){
// 
 if(this.document.getElementById('em').value=='praveen'||this.document.getElementById('em').value=='Praveen' &&
 this.document.getElementById('pw').value=='789')
 
   {
    alert(this.document.getElementById('em').value)
    this.router.navigate(['menu']);

  } 
   else{
    alert("wrong Email or Password")
   }
}
// opennew(event:any){
//   window.open('/menu','_blank')
// }


}




