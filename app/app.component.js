"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component decoration
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        // Title is a literal string so it is joined by a =
        this.title = "My angular heros";
        // Hero is now an object and therefore is joined by a : and its properties are in a {}
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // Pulling in a plain string means we can use double curlies plus the name of the property in the class - i.e. {{title}}
            // If a property is an object instead we need to use the property name plus the dot selector to choose the correct property of an object i.e. {{hero.name}}
            template: "\n    <h1>{{title}}</h1>\n    <h2>{{hero.name}} details!</h2>\n    <div><label>id: </label>{{hero.id}}</div>\n    <div><label>name: </label>{{hero.name}}</div>\n    <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// Hero class
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=app.component.js.map