export class Common {
  public static shuffle(input: Array<string>): Array<string> {
    let currentIndex = input.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = input[currentIndex]
      input[currentIndex] = input[randomIndex]
      input[randomIndex] = temporaryValue
    }

    return input
  }
}
