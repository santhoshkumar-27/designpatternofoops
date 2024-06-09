import { Component } from '@angular/core';
import strategyPattern from './designPatterns/creationalPatterns/strategypattern';
import ObservorPattern from './designPatterns/BehaviouralPatterns/observerpattern';
import factoryPattern from './designPatterns/creationalPatterns/factorypattern';
import { abstractFactory } from './designPatterns/creationalPatterns/abstractFactoryPattern';

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
    // abstractFactory()
  }
}
