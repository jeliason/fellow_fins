import { Component } from '@angular/core';
import { PEOPLE } from './ff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ff-app';
  people = PEOPLE;
  showFront = true;
  quizEnd = false;
  counter = 0;
  score = 0;
  correctFinCode;
  correctFinName;
  correctFinPic;
  incorrectFinArray;
  finArray = [];
  full_array = Array.from({ length: this.people.length }, (x, i) => i);
  select_index = this.full_array;

  initQuiz() {
    this.counter = 0;
    this.score = 0;
    this.select_index = this.full_array;
    this.showFront = false;
    this.quizEnd = false;
    this.getFin();
  }
  hideQuiz() {
    this.showFront = true;
    this.quizEnd = false;
  }
  getFin() {
    this.correctFinCode = this.select_index[Math.floor(Math.random() * this.select_index.length)];

    this.select_index = this.select_index.filter((el) => {
      return el != this.correctFinCode;
    } );
    this.correctFinName = PEOPLE[this.correctFinCode].Name;
    this.correctFinPic = PEOPLE[this.correctFinCode].Picture_Local;

    this.incorrectFinArray = [];
    while (this.incorrectFinArray.length < 3) {
      var incorrectFinCode = Math.floor(Math.random() * PEOPLE.length);
      if (incorrectFinCode != this.correctFinCode && !this.incorrectFinArray.includes(incorrectFinCode)) this.incorrectFinArray.push(PEOPLE[incorrectFinCode].Name);
    }

    this.finArray = this.incorrectFinArray;
    var randIdx = Math.floor(Math.random() * 4);

    this.finArray.splice(randIdx, 0, this.correctFinName);

    console.log(this.finArray[0]);
  }

  onSuccess() {
    this.score += 1;
    this.onFailure();
  }
  onFailure(){
    this.counter += 1;
    if (this.counter === this.people.length) {
      this.quizEnd = true;
    } else {
      this.getFin();
    }
    this.sleep(300);
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

}