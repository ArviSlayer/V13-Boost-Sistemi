const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    ` [${moment().format(
      "YYYY-MM-DD HH:mm:ss"
    )}] Bot: Aktif, Komutlar Yüklendi`
  );

  console.log(
    ` [${moment().format("YYYY-MM-DD HH:mm:ss")}] Bot: ${
      client.user.username
    } İsmiyle Giriş Yapıldı`
  );

  client.user.setStatus("WATCHING");
  client.user.setActivity("ArviS#0011 | !yardım", {
    type: "WATCHING"
  });
};
