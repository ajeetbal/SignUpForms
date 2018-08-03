import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {FormGroup,FormControl} from '@angular/forms';
import { Router} from '@angular/router';
import { Validators } from '@angular/forms';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  userList:User[]=[];
  user;
  toggle:string='password';
  gender=['Male','Female'];
  form: FormGroup;
  constructor(private store:StoreService,private routes:Router) { }
  
  
  addUser(form){
    //localStorage.setItem("data",JSON.stringify(this.form.value));
    this.store.fillform(this.form.value);
    this.routes.navigate(['/table']);
    
  }
 
  togglePasswordMode() {   
    if(this.toggle=='password')
    {
      this.toggle='text';
    }
    else{
      this.toggle='password';
    }
 }



  ngOnInit() {
    this.form=new FormGroup({
      firstname: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]+')]),
      lastname: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]+')]),
      gender: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{8,}')]),
      contact:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
      confirmpassword:new FormControl('',[Validators.required]),
      eid:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.minLength(4)])
    })
   // if(JSON.parse( localStorage.getItem("data")))
    if (this.store.emptyform())
   {  
     // this.user=JSON.parse(localStorage.getItem("data"));
     this.user=this.store.emptyform();
     this.form.patchValue({
        firstname:this.user.firstname,
        lastname:this.user.lastname,
        eid:this.user.eid,
        password:this.user.password,
        confirmpassword:this.user.confirmpassword,
        contact:this.user.contact,
        gender:this.user.gender
      
      })
    } 
    else{
      console.log("adfc");
    }     
    
    
/*
window.onbeforeunload=function(){
this.s.clear();
return '';

}*/
  }


  }
