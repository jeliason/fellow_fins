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
<<<<<<< HEAD
  
=======
  getFin (){
    var correctFinCode = Math.floor(Math.random() * 53);

    var correctFinName = PEOPLE[correctFinCode].Name;

    var correctFinPic = PEOPLE[correctFinCode].Picture_Local;
  }
>>>>>>> 162b7440de64f644560ae0f3439f2890c6cf45a6
}