import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {FormGroup,FormControl} from '@angular/forms';
import { Router} from '@angular/router';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  userList:User[]=[];

  form: FormGroup;
  constructor(private routes:Router) { }
  addUser(form){
    localStorage.setItem("data",JSON.stringify(this.form.value));
    this.userList.push(this.form.value);
    this.routes.navigate(['/table']);
  }



  ngOnInit() {
    this.form=new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]+')]),
      lname: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]+')]),
      password:new FormControl('',[Validators.required,Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}'),Validators.maxLength(10)]),
      contact:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      eid:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.minLength(4)])
    })
  }

}
