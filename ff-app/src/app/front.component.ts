import { Component,OnInit } from '@angular/core';
import {PEOPLE} from './ff';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['../styles.css']
})
export class FrontComponent{
  title = 'ff-app';
  people = PEOPLE;
}