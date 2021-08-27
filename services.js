import axios from "axios";

const getPokemons = async () => {
    try {
        let {data} = await axios.get("https://pokeapi.co/api/v2/pokemon");
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export default getPokemons;