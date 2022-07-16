const obj = {
  name: "mick"
} as const

// obj.name = "mick" // readonly

let a = "mick" as const
let b = 2030
let arr = [a, b] as const
let f = arr[1]
f = 1
console.log(f)

let str: string | null = "mcik"
str = null

{
  const el = document.querySelector(".mick") as HTMLDivElement
}
