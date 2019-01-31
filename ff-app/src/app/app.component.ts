import { Component} from '@angular/core';
import {PEOPLE} from './ff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ff-app';
  people = PEOPLE;
  showFront = true;

  counter = 0;
  score = 0;

  full_array=Array.from({length:this.people.length},(x,i)=>i);
  select_index = this.full_array;

  initQuiz() {
    this.counter = 0;
    this.score = 0;
    this.select_index = this.full_array;
    this.showFront=false;
  }
  hideQuiz(){
    this.showFront=true;
  }
  
}