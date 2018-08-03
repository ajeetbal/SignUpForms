import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Router} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TableComponent } from './table/table.component';
import { StoreService } from './store.service';
import { BluecolorDirective } from './bluecolor.directive';
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
    TableComponent,
    BluecolorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
