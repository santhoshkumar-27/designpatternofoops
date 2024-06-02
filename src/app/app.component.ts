import { Component } from '@angular/core';
import strategyPattern from './shareded/strategypattern';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'designpatternofoops';
  constructor() {
    strategyPattern()
  }
}
