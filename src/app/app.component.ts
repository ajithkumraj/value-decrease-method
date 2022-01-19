import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // name = 'Angular';
  constructor(public _student: StudentService){}

  ngOnInit(): void {

  }
  Decrease(){
    this._student.addOne();
  }
}

