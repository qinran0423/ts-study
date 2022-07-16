interface AnimationInterface {
  name: string
  move(): void
}

interface AnimationInterface {
  end(): void
}

class Player implements AnimationInterface {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move(): void {
    throw new Error("Method not implemented.")
  }
  end(): void {
    throw new Error("Method not implemented.")
  }
}
