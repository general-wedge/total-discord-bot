import Discord from 'discord.js'

export class MessageDelegate {
  public static getTarkovMessageEmbed(title: string) {
    return new Discord.MessageEmbed()
      .setColor('#23bfdc')
      .setTitle(title)
      .setAuthor('Escape From Tarkov')
      .setThumbnail('https://i.ytimg.com/vi/lc9x9TznmiA/maxresdefault.jpg')
      .setTimestamp()
      .setFooter('@Copyright The Winking Eye TM')
  }
}
