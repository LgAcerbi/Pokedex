import './App.css';
import React from 'react';
import {useState,useEffect} from 'react';
import api from './services/api.js'
import Modal from './components/modal'


function App() {

  const [pokemons,setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [modalInfo, setModalInfo] = useState({})
  
  useEffect(() =>{
      async function Load(){
        let data = await api.getAllPokemons();
        setPokemons(data.data)
      }
      Load();
  },[])

  useEffect(() =>{
    setFilteredPokemon(
      pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(search.toLocaleLowerCase())
      })
    )
  },[search, pokemons])

  return (
    <div className="App">
      <div className = "Content">
      <div className = "Header">
        <h1>POKÉDEX</h1>
        <input type = "text" placeholder = "Search" onChange = {e => setSearch(e.target.value)}></input>
      </div>
      <div className = "pokemonGrid">
      {filteredPokemon.map((item)=>(
        <div className = "pokemonItem" key = {item.name} onClick = {() => {setIsOpen(true); setModalInfo(item);}}>

          <a className = "pokemonID">{"#" + (item.id)}</a>
          <img className = "pokemonImg" src = {item.imgSrc}></img>
          <a>{item.name}</a>         

        </div>
      ))}

      <Modal open = {isOpen} onClose ={()=> setIsOpen(false)}>
          {modalInfo}
      </Modal>

      </div>
      </div>
      <footer>All data & design © pokeapi.co, 2020<br/> 
      Pokémon images & names © 1995-2020 Nintendo/Game Freak<br/>
      Made by Luiz Guilherme dos Santos Acerbi
      </footer>
    </div>
  );
}

export default App;
