"use strict";
// function decorator(target: Object) {}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @decorator
// class Mc {}
{
    const moveDecorator = (target) => {
        target.prototype.getPositon = () => {
            return { x: 100, y: 200 };
        };
    };
    const MusicDecorator = (target) => {
        target.prototype.playMusic = () => {
            console.log("播放音乐");
        };
    };
    let Tank = class Tank {
    };
    Tank = __decorate([
        moveDecorator,
        MusicDecorator
    ], Tank);
    const t = new Tank();
    console.log(t.getPositon());
    t.playMusic();
    // @moveDecorator
    // class Player {}
    // const p = new Player()
    // console.log(p.getPositon())
}
{
    const MessageDecorator = (target) => {
        target.prototype.message = (content) => {
            console.log(content);
        };
    };
    let LoginController = class LoginController {
        message(str) { }
        login() {
            console.log("登录业务处理");
            this.message("恭喜你");
        }
    };
    LoginController = __decorate([
        MessageDecorator
    ], LoginController);
    new LoginController().login();
}
{
    const moveDecoratorFactory = (type) => {
        switch (type) {
            case "tank":
                return (target) => {
                    target.prototype.getPositon = () => {
                        return { x: 100, y: 200 };
                    };
                };
            case "player":
                return (target) => {
                    target.prototype.getPositon = () => {
                        return { x: 1000, y: 4000 };
                    };
                };
            default:
                return (target) => {
                    target.prototype.getPositon = () => {
                        return { x: 0, y: 0 };
                    };
                };
        }
    };
    let Tank = class Tank {
    };
    Tank = __decorate([
        moveDecoratorFactory("tank")
    ], Tank);
    const t = new Tank();
    console.log(t.getPositon());
    let Player = class Player {
    };
    Player = __decorate([
        moveDecoratorFactory("player")
    ], Player);
    const p = new Player();
    console.log(p.getPositon());
}
