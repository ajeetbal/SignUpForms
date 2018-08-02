import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  formvalue;
  constructor(private store:StoreService,private routes:Router) { 
  //  if(localStorage.getItem("data")){
    if(this.store.emptyform()){
     //this. formvalue= JSON.parse(localStorage.getItem("data"));
     this.formvalue=this.store.emptyform();
     console.log(this.formvalue);
         
  }

}
move(){

  this.routes.navigate(['reactive-forms']);
}
done(){
  
  alert('Welcome'+ this.formvalue.firstname);
}

  ngOnInit() {
   
  }
  

}