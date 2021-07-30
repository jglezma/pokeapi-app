import { pokemonState } from './pokemonList';
import { pokemonDetail } from './pokemonDetail';
import { typeState } from './typeState';
import { abilitiesState } from './AbilitiesState';

export type AppState = {
  pokemonList: pokemonState;
  pokemonDetail: pokemonDetail;
  typeState: typeState;
  abilitiesState: abilitiesState;
};
