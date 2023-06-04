import { getCharacters } from "rickmortyapi";
const getRMCharacters = await getCharacters();
console.log(getRMCharacters.status);
if (getRMCharacters.data.results != undefined) {
    console.log('Name: ', getRMCharacters.data.results[0]);
}
// const rickMortyCharacter = fetch("https://rickandmortyapi.com/api/character").then(resp => console.log(resp.json())).then((data: <CharacterInfo>[]) => data.results[0].)
//# sourceMappingURL=async-fetch.js.map