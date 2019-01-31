import { Component} from '@angular/core';
import {PEOPLE} from './ff';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz_page.component.html',
  styleUrls: ['./quiz_page.component.css']
})
export class QuizPageComponent{
  title = 'ff-app';
  people = PEOPLE;

  selectRandomPerson (){
    var randomPerson = Math.floor(Math.random() * 53);
    console.log(randomPerson);
  }
}