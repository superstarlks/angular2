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
        this.title = "TED TutorialComponent";
    }
    TutorialComponent.prototype.OnClick = function (value) {
        alert(value);
    };
    return TutorialComponent;
}());
TutorialComponent = __decorate([
    core_1.Component({
        selector: 'my-tutorial',
        template: "<h2>{{title}}</h2>\n        <button (click) = \"OnClick(name.value)\">click me</button>\n        <input type=\"text\" #name />\n    "
    })
], TutorialComponent);
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map