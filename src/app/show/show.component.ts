import { Component, OnInit } from '@angular/core';
import { DataComponent } from '../data/data.component';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private datacomponent:DataComponent) { }

  ngOnInit(): void {
  //  alert(this.datacomponent.amount)this.datacomponent.done()
  // alert(this.datacomponent.amount)
  }
isshown:boolean=false;
a=this.datacomponent.str
x=this.datacomponent.name

toggleShow(){
  this.isshown=!this.isshown
  // this.datacomponent.name
}
}
