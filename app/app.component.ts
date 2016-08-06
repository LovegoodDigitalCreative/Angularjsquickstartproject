// @Component decoration
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  // Pulling in a plain string means we can use double curlies plus the name of the property in the class - i.e. {{title}}
  // If a property is an object instead we need to use the property name plus the dot selector to choose the correct property of an object i.e. {{hero.name}}
  template:`
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
    <input [(ngModel)]="hero.name" placeholder="name">
    `
})

// App component (this is a class)
export class AppComponent {
  // Title is a literal string so it is joined by a =
  title = "My angular heros";
  // Hero is now an object and therefore is joined by a : and its properties are in a {}
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

// Hero class
export class Hero {
  id: number;
  name: string;
}
