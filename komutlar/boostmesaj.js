const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!args[0]) return message.reply('**Bir Seçenek Belirt** \n Belirtebileceğin Seçenekler: **<ayarla> <kanal>/<sıfırla>**')
if(args[0]) {
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") {
    return message.reply("**Bir Seçenek Belirt** \n Belirtebileceğin Seçenekler: **<ayarla> <kanal>/<sıfırla>**")
}
  if(args[0] == "ayarla") {
    if(!args[1]) {
      return message.reply('Bir Mesaj Girmelisin')
    } else {
      let msj = args.slice(1).join(' ')
      if(!msj) {
        return message.reply('Lütfen Geçerli Bir Mesaj Gir')
      } else {
       db.set(`boostmesaj_${message.guild.id}`, `${args.slice(1).join(' ')}`)
       message.reply(`Boost Mesajı Başarıyla **${args.slice(1).join(' ')}** Olarak Ayarlandı`)
      }
    }
  }
  if(args[0] == "sıfırla") {
    db.delete(`boostmesaj_${message.guild.id}`)
    message.reply(`Boost Mesajı Başarıyla Sıfırlandı`)
  }
}
  
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['boost-mesaj'],
  permlevel: 0
}

exports.help = {
  name: 'boost-mesaj',
  description: 'Boost Kanalına Gönderilecek Mesajı Ayarlarsınız',
  usage: ''
}

