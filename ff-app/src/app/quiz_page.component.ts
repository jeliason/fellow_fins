import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz_page.component.html',
  styleUrls: ['./quiz_page.component.css']
  
})
export class QuizPageComponent{
  @Input() correctFinPic:string;
  @Input() finArray:Array<string>;
  @Input() correctFinName:string;
  @Output() success = new EventEmitter();
  @Output() failure = new EventEmitter();
  ocean=true;
  danger=false;

  done(p: string){
    if (p == this.correctFinName){
      this.success.emit();
      this.ocean=false;
    }
    else{
      this.failure.emit()
      this.ocean=false;
      this.danger=true;
    }
  }

}