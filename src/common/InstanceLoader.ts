export class InstanceLoader {
  static getInstance<T>(context: any): T {
    const instance = Object.create(context[Object.keys(context)[0]].prototype)
    return new instance.constructor()
  }
}
