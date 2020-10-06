const Discord = require('discord.js');
const fs = require("fs")
const path = require("path")

module.exports.run = async (client, message, args) => {
    if(args.length !== 3) {
        await message.channel.send("ATTENTION IL N'Y A PAS ASSEZ D'ARGUMENTS POUR AJOUTER CETTE POS !")
        return
    }

    if(!parseInt(args[1]) || !parseInt(args[2])) {

        await message.channel.send("ATTENTION LES DEUX DERNIERS ARGUMENTS DOIVENT ETRE DES NUMEROS !")
        return
    } 


    let addbdd = require('../bdd/bdd.json')
    addbdd.Liste.push({"endroit": args[0], "pos" : args[1]+";"+args[2]})
    fs.writeFile(path.resolve(__dirname, "../bdd/bdd.json"), JSON.stringify(addbdd, null, 2), async function(error) {
        if(error){
            await message.channel.send("Ajout impossible : \n - Veuillez vérifier votre argument \n - La fonction add doit être écrite de cette façon : titre-position-exemple latitude longitude \n - Sinon contacter Antoine VALLET")
            console.error(error)
            return
        }
        await message.channel.send("ajout effectué")
    })
}

module.exports.help = {
    name: "add"
}