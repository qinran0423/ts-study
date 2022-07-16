enum sexType {
  BOY,
  GIRL
}

interface user {
  name: string
  age: number
  sex: sexType
}

const mick: user = {
  name: "mick",
  age: 20,
  sex: sexType.BOY
}

const randy: user = {
  name:'randy', 
  age: 22,
  sex: sexType.GIRL
}
console.log(mick, randy)
