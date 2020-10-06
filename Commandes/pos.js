const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {

    let bdd = require('../bdd/bdd.json')
    for(let i in bdd.Liste){
        //message.channel.send("endroit : " +bdd.Liste[i].endroit + "\npos : "+bdd.Liste[i].pos);
        message.channel.send({embed: {
            fields:[{
                name : "Endroit",
                value: bdd.Liste[i].endroit
            },
            {
                name: "Position",
                value: bdd.Liste[i].pos
            }
        
        ]
        }
        });
    }

    

}

module.exports.help = {
    name: "pos"
}