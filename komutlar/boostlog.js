const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR'))

        return message.channel.send('**Bu Komutu Kullanabilmek İçin** "\`Yönetici\`" **Yetkisine Sahip Olmalısın**')

	
if(!args[0]) return message.reply('**Bir Seçenek Belirt** \n Belirtebileceğin Seçenekler: **<ayarla> <kanal>/<sıfırla>**')
if(args[0]) {
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") {
    return message.reply("**Bir Seçenek Belirt** \n Belirtebileceğin Seçenekler: **<ayarla> <kanal>/<sıfırla>**")
}
  if(args[0] == "ayarla") {
    if(!args[1]) {
      return message.reply('Bir Kanal Belirtmelisin')
    } else {
      let kanal = message.mentions.channels.first() || client.channels.cache.get(args[1])
      if(!kanal) {
        return message.reply('Böyle Bir Kanal Bulunamadı')
      } else {
       db.set(`boostlog_${message.guild.id}`, kanal.id)
       message.reply(`Boost Log Kanalı Başarıyla <#${kanal.id}> Olarak Ayarlandı`)
      }
    }
  }
  if(args[0] == "sıfırla") {
    db.delete(`boostlog_${message.guild.id}`)
    message.reply(`Boost Log Başarıyla Sıfırlandı`)
  }
}
  
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['boost-log'],
  permlevel: 0
}

exports.help = {
  name: 'boostlog',
  description: 'Boost Log Kanalını Ayarlamanızı Sağlar',
  usage: ''
}