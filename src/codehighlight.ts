{
  const highDecorator: MethodDecorator = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value
    descriptor.value = () => {
      return `<div style="color: red">${method()}</div>`
    }
  }

  class User {
    @highDecorator
    public static response() {
      return "mick"
    }
  }

  console.log(User.response())
}
