type IsAdmin = boolean
type sex = 'boy' | 'girl'

type User = {
  name: string,
  age: number,
  isAdmin: IsAdmin,
  sex: sex,
  show(): string
}
// interface User {
//   name: string,
//   age: number,
//   show(): string
// }

const mick1: User = {
  name: "mick",
  age: 10,
  isAdmin: true,
  sex: 'boy',
  show() {
    return this.name
  },
}