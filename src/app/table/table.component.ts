import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  formvalue;
  constructor(private routes:Router) { 
    if(localStorage.getItem("data")){
     this. formvalue= JSON.parse(localStorage.getItem("data"));
     console.log(this.formvalue);
         
  }

}
move(){
  this.routes.navigate(['reactive-forms']);
}

  ngOnInit() {
   
  }
  

}