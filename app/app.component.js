"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "kingcom!";
        //property binding
        this.image = "http://img.f30.vnecdn.net/2017/03/08/xe-bien-do-3797-1488949522_490x294.jpg";
        this.welcometext = "welcome to kingcom vietnam";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>Hell TED {{title}}</h1>\n  <img [src] = \"image\" />\n  <my-tutorial></my-tutorial>\n  <input type=\"text\" [value] =\"welcometext\" />\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map