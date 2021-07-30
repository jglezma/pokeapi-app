import { AppState } from '../types/state';
import { pokemonList } from './pokemonList';
import { pokemonDetailStore } from './pokemonDetail';
import { typeStore } from './typeStore';
import { abilitiesStore } from './abilitiesStore';

export const initialState: AppState = {
  pokemonList: pokemonList,
  pokemonDetail: pokemonDetailStore,
  typeState: typeStore,
  abilitiesState: abilitiesStore
};
