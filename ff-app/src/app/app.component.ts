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
}