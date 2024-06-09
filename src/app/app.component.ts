import { Component } from '@angular/core';
import ObservorPattern from './designPatterns/BehaviouralPatterns/observerpattern';
import abstractFactory from './designPatterns/creationalPatterns/abstractFactoryPattern';
import factoryPattern from './designPatterns/creationalPatterns/factorypattern';
import strategyPattern from './designPatterns/creationalPatterns/strategypattern';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'designpatternofoops';
  constructor() {
    ObservorPattern();
    strategyPattern();
    factoryPattern()
    abstractFactory()
  }
}
