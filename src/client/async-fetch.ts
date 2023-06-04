import fetch from "node-fetch";
import {ApiResponse, Character, Info, getCharacters} from "rickmortyapi";


interface RickMorty {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: [Object],
  location: [Object],
  image: string,
  episode: string,
  url: string,
  created: string
}

const getRMCharacters = await getCharacters()

console.log(getRMCharacters.status);

if (getRMCharacters.data.results != undefined) {
  console.log('Name: ', getRMCharacters.data.results[0]);
}

// const rickMortyCharacter = fetch("https://rickandmortyapi.com/api/character").then(resp => console.log(resp.json())).then((data: <CharacterInfo>[]) => data.results[0].)

