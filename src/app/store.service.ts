import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  memory:object;
  fillform(data){
      this.memory=data;
  }
  emptyform(){
    return this.memory;
  }
  constructor() { }
}
