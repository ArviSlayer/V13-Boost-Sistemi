const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => { 
const ayarlar = require("../ayarlar.json");
let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!";    
let rol = message.mentions.roles.first() 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu Komutu Kullanabilmek İçin** "\`Yönetici\`" **Yetkisine Sahip Olmalısın**`);
 
 if(!rol) return message.channel.send(`:x:  **Lütfen Bir Rol Belirt!** \n\n Rolü Etiketleyemiyorsan **Rol Etiketlenme** Seçeneğini Aktif Etmeyi Unutma \n\n **__Örnek Kullanım__** : \`${prefix}boost-rol @rol \` \n\n\n **__NOT__**: **Boost Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Olmalıdır** `)
 
 
 
  message.channel.send(
`╔▬▬▬▬▬▬▬BOOST OTOROL▬▬▬▬▬▬▬▬▬
║► ✅ Booster Rol Aktif Edildi
║► ✅ Booster Rolü **${rol}** Olarak Güncellendi 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`boostrol_${message.guild.id}`, rol.id)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['boost-rol']
  };
  
  exports.help = {
    name: 'boost-rol',
    description: 'Boost Basan Kişiye Otmatik Rol Vermeyi Sağlar',
    usage: ''
  };
