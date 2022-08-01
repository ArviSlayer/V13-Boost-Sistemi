const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setColor("#30c7ff")
    .setThumbnail(message.author.AvatarURL)
    .addField(
      `Booster Otorol`,
      `\`${prefix}boost-rol <> @rol\``,
      true
    )

    .addField(
      `Boost Sistemi Kapat`,
      `\`${prefix}boost-sistemi-kapat\` `,
      true
    )

    .addField(
      `Boost Log`,
      `\`${prefix}boostlog <#kanal>\``,
      true
    )

    .addField(
      `Boost Mesajı`,
      `\`${prefix}boost-mesaj <mesaj>\``,
      true
    )

  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
