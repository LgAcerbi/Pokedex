const { Router } = require('express')
const PokemonController = require('./controller/pokemon-ctrl')

const route = new Router();

route.get('/' , function (req,res) {
    PokemonController.onGetAllPokemons(req,res)
})

module.exports = route;