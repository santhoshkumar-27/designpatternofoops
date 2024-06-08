import { Component } from '@angular/core';
import strategyPattern from './shareded/strategypattern';
import ObservorPattern from './shareded/observerpattern';
import factoryPattern from './shareded/factorypattern';
import { abstractFactory } from './shareded/abstractFactoryPattern';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'designpatternofoops';
  constructor() {
    // strategyPattern();
    // ObservorPattern();
    // factoryPattern()
    abstractFactory()
  }
}
