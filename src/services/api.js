import axios from 'axios'

export default{
    getAllPokemons: async ()=>{
        return await axios.get("http://localhost:8000")
    }
}


