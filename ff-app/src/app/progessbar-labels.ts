import {Component, Input} from '@angular/core';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'ngbd-progressbar-labels',
  templateUrl: './progressbar-labels.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class NgbdProgressbarLabels {
    @Input() counter:number;
    @Input() numFins:number;
    percent = this.counter/this.numFins;
}