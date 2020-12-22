const Database = require('../database/index')

class PokemonController{
     static async onGetAllPokemons(req,res){

          const IMG = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
          const FRONT_SPRITE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
          const BACK_SPRITE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"
          const FRONT_SHINY = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"
          const BACK_SHINY = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/"

         let interval = {
              limit: 151,
              offset: 0
         }
         Database.getPokemonsList(interval).then((response)=>{

               for (let i = 0; i < response.results.length; i++) {
                    response.results[i]["id"] = (i+1)
                    response.results[i]["imgSrc"] = `${IMG}${i+1}.png`        
                    response.results[i]["frontSprite"] = `${FRONT_SPRITE}${i+1}.png` 
                    response.results[i]["backSprite"] = `${BACK_SPRITE}${i+1}.png` 
                    response.results[i]["shinyFrontSprite"] = `${FRONT_SHINY}${i+1}.png` 
                    response.results[i]["shinyBackSprite"] = `${BACK_SHINY}${i+1}.png`                 
               }

               res.send(response.results)

         }).catch((err)=>{
              res.send(err)
         })
     }
     
}

module.exports = PokemonController;