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

  getFin (){
    var correctFinCode = Math.floor(Math.random() * 53);
    console.log(correctFinCode);

    var correctFinName = PEOPLE[correctFinCode].Name;
    console.log(correctFinName);

    var correctFinPic = PEOPLE[correctFinCode].Picture_Local;
    console.log(correctFinName);
  }
}