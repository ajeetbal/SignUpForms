import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Router} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TableComponent } from './table/table.component';

const Routes=[
  {
    path:"reactive-forms",
    component:ReactiveFormsComponent
  },
  {
    path:"table",
    component:TableComponent
  }
]




@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
