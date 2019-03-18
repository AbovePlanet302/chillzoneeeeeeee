const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Help Panel")
    .setColor("#15f153")
    .addField("User Commands", "!coins, !help, !level, !pay, !report")
    .addField("Moderation Commands", "!addrole, !ban, !clear, !kick, !removerole, !say, !serverinfo, !prefix");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"help"
}

