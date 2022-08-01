const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu Komutu Kullanabilmek İçin** "\`Yönetici\`" **Yetkisine Sahip Olmalısın**`);
 const rol = db.fetch(`boostrol_${message.guild.id}`)  
 if(!rol) return message.reply(`*Bu Özellik Zaten Kapalı**`)
 
 
  message.channel.send(`✅ **Boost Sistemi Başarıyla Kapatıldı**`)

 
  db.delete(`boostrol_${message.guild.id}`)  
  db.delete(`boostlog_${message.guild.id}`) 
  db.delete(`boostmesaj_${message.guild.id}`)  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['boost-sistemi-kapat']
  };
  
  exports.help = {
    name: 'boost-sistemi-kapat',
    description: 'Boost Sistemini Kapatmanızı Sağlar',
    usage: ''
  };