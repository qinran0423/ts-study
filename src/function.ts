type userType = { name: string; age: number }

type userAddFun = (user: userType) => boolean

let addUser: userAddFun = (user) => {
  return true
}

addUser({ name: "mick", age: 20 })
