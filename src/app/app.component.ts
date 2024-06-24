import { Component } from '@angular/core';
// import ObservorPattern from './designPatterns/BehaviouralPatterns/observerpattern';
// import abstractFactory from './designPatterns/CreationalPatterns/abstractFactoryPattern';
// import factoryPattern from './designPatterns/CreationalPatterns/factorypattern';
// import strategyPattern from './designPatterns/BehaviouralPatterns/strategypattern';
// import singleton from './designPatterns/CreationalPatterns/singleTon';
// import builderPattern from './designPatterns/CreationalPatterns/builderPattern';
// import protoTypePattern from './designPatterns/CreationalPatterns/prototypePattern';
// import decoratorPattern from './designPatterns/StructuralPatterns/decoratorPattern';
import adaptorPattern from './designPatterns/StructuralPatterns/adaptorPattern';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'designpatternofoops';
  constructor() {
    // creational patterns
    // factoryPattern()
    // abstractFactory()
    // singleton();
    // builderPattern();
    // protoTypePattern();


    // Structural pattern
    // decoratorPattern()
    adaptorPattern()


    // Behavioural Patterns
    // ObservorPattern();
    // strategyPattern();


  }
}
