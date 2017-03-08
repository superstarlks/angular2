"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.showLineIf = false; // tao 1 bien 
        this.color = "red"; // muon hien thi dong "red" thi bo red vao
        this.colors = ["red", "green", "blue"];
    }
    return TutorialComponent;
}());
TutorialComponent = __decorate([
    core_1.Component({
        selector: 'my-tutorial',
        template: "<h2>{{title}}</h2>\n        <h3 *ngIf=\"showLineIf\">this is ngIf directive line.</h3>\n        <div [ngSwitch] = \"color\">\n            <p *ngSwitchCase=\"'red'\">this line color is red</p>\n            <p *ngSwitchCase=\"'blue'\">this line color is blue</p>\n            <p *ngSwitchCase=\"'green'\">this line color is green</p>\n            <p *ngSwitchDefault>invalid color</p>\n        </div>\n        <ul>\n            <li *ngFor=\"let color of colors\" >{{color}}</li>\n        </ul>\n    "
    })
], TutorialComponent);
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map