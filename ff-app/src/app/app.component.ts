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
  quizEnd=false;
  counter = 0;
  score = 0;
  correctFinCode;
  correctFinName;
  correctFinPic;
  incorrectFinArray;
  finArray=[];
  full_array=Array.from({length:this.people.length},(x,i)=>i);
  select_index = this.full_array;

  initQuiz() {
    this.counter = 0;
    this.score = 0;
    this.select_index = this.full_array;
    this.showFront=false;
    this.quizEnd=false;
    this.getFin();
  }
  hideQuiz(){
    this.showFront=true;
    this.quizEnd=false;
  }
  getFin(){
    this.correctFinCode = this.select_index[Math.floor(Math.random() * this.select_index.length)];
    this.correctFinName = PEOPLE[this.correctFinCode].Name;
    this.correctFinPic = PEOPLE[this.correctFinCode].Picture_Local;

    this.incorrectFinArray = [];
    while(this.incorrectFinArray.length < 3){
        var incorrectFinCode = Math.floor(Math.random()*PEOPLE.length);
        if (incorrectFinCode!=this.correctFinCode && !this.incorrectFinArray.includes(incorrectFinCode)) this.incorrectFinArray.push(PEOPLE[incorrectFinCode].Name);
    }
  
    this.incorrectFinArray.push(this.correctFinCode);
    this.finArray = this.incorrectFinArray;
    var randIdx= Math.floor(Math.random() * 4);

    this.finArray.splice(randIdx,0,this.correctFinName);

    console.log(this.finArray[0]);
  }

  btnPressed(fin){
    let result = this.isCorrect(fin)
    if(result) {
      this.score+=1;
      // change btn to green
      // rest to red
    } else{
      // change btn to red
      // right one to green
      // rest to red
    }

    this.counter+=1;
    if (this.counter===this.people.length){
      this.quizEnd=true;
    }else{
      this.getFin();
    }
  }  
  isCorrect(fin){
    return fin === this.correctFinName; 
  }
}