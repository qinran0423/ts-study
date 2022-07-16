function getLength<T extends any[] | string>(arg: T): number {
  return arg.length
}

console.log(getLength("mick"))
