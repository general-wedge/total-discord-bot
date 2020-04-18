import Discord from 'discord.js'
import fetch from 'node-fetch'
import querystring from 'querystring'
import {CommandsEnum} from '../common/CommandsEnum'
import {BaseCommandAbstract} from '../shared/BaseAbstract'

export class UrbanDictionary extends BaseCommandAbstract {
  constructor() {
    super()
    this.command = `${CommandsEnum[CommandsEnum.ask]}`
    this.description =
      'This command queries urban dictionarys API and returns the result'
  }

  public async handleMessage() {
    if (!this.args.length) {
      return this.sendMessage('You need to supply a search term!')
    }

    const query = querystring.stringify({term: this.args.join(' ')})

    const {list} = await fetch(
      `https://api.urbandictionary.com/v0/define?${query}`,
    ).then((response: any) => response.json())

    if (!list.length) {
      return this.sendMessage(
        `No results found for **${this.args.join(' ')}**.`,
      )
    }

    const [answer] = list

    const embed = new Discord.MessageEmbed()
      .setColor('#EFF000')
      .setTitle(answer.word)
      .setURL(answer.permalink)
      .addField('Definition', answer.definition)
      .addField('Example', answer.example)
      .addField(
        'Rating',
        `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`,
      )

    this.sendMessage(embed)
  }
}
