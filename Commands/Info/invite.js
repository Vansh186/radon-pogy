const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "Get the bot's",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("PURPLE")
      .setDescription(
        "**Get Pogy's Invite Link [Here](https://discord.com/oauth2/authorize?client_id=870778492999061524&permissions=1584921983&scope=bot)**\n**Need assistance? Join our [Support Server](https://discord.gg/KgX352rB8b) now!**"
      )
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
