
import getPokemons from "./services";

test("Debería regresar un arreglo al hacer una peticion a la pokeapi", async () => {
    let result = await getPokemons();

    expect(typeof result).toEqual(expect.any(Array));
});

