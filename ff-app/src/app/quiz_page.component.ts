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
    var arr = []
    while(arr.length < 54){
        var correctFinCode = Math.floor(Math.random()*53);
        if(arr.indexOf(correctFinCode) === -1) arr.push(correctFinCode);
    }
    console.log(correctFinCode);

    var correctFinName = PEOPLE[correctFinCode].Name;
    console.log(correctFinName);
    
    var correctFinPic = PEOPLE[correctFinCode].Picture_Local;
    console.log(correctFinPic);
  }
}