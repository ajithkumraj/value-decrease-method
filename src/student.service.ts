import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  counter : number = 50;

  constructor() { }

addOne(){
  this.counter--;
}

}