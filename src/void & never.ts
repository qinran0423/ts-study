function run(): void {}

console.log(run())

function mc1(): never {
  throw new Error("类型错误")
}

mc1()
