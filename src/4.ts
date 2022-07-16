// 泛型 generics


function dump<T> (arg: T): T {
  return arg
}


let mc = dump<string>("mick")

let ra = dump<Boolean>(true)