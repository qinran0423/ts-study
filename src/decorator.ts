// function decorator(target: Object) {}

// @decorator
// class Mc {}

{
  const moveDecorator: ClassDecorator = (target: Function) => {
    target.prototype.getPositon = (): { x: number; y: number } => {
      return { x: 100, y: 200 }
    }
  }

  const MusicDecorator: ClassDecorator = (target: Function) => {
    target.prototype.playMusic = (): void => {
      console.log("播放音乐")
    }
  }
  @moveDecorator
  @MusicDecorator
  class Tank {}

  const t = new Tank()
  console.log((<any>t).getPositon())
  ;(<any>t).playMusic()
  // @moveDecorator
  // class Player {}
  // const p = new Player()
  // console.log(p.getPositon())
}

{
  const MessageDecorator: ClassDecorator = (target: Function) => {
    target.prototype.message = (content: string) => {
      console.log(content)
    }
  }

  @MessageDecorator
  class LoginController {
    public message(str: string) {}
    public login() {
      console.log("登录业务处理")
      this.message("恭喜你")
    }
  }

  new LoginController().login()
}

{
  const moveDecoratorFactory = (type: string): ClassDecorator => {
    switch (type) {
      case "tank":
        return (target: Function) => {
          target.prototype.getPositon = (): { x: number; y: number } => {
            return { x: 100, y: 200 }
          }
        }
      case "player":
        return (target: Function) => {
          target.prototype.getPositon = (): { x: number; y: number } => {
            return { x: 1000, y: 4000 }
          }
        }
      default:
        return (target: Function) => {
          target.prototype.getPositon = (): { x: number; y: number } => {
            return { x: 0, y: 0 }
          }
        }
    }
  }

  @moveDecoratorFactory("tank")
  class Tank {}

  const t = new Tank()
  console.log((<any>t).getPositon())
  @moveDecoratorFactory("player")
  class Player {}

  const p = new Player()
  console.log((<any>p).getPositon())
}
