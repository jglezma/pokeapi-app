import { AppAction } from '../actions';
import { PokemonListAction } from '../actions/pokemonList';
import { initialState } from '../store';
import { AppState } from '../types/state';
import { PokemonListReducer } from './pokemonList';
import { PokemonDetailReducer } from './pokemonDetail';
import { AbilitiesReducer } from './abilitiesReducer';
import { PokemonDetailAction } from '../actions/pokemonDetail';
import { typeReducer } from './typeReducer';
import { TypeAction } from '../actions/typeAction';
import { AbilitiesAction } from '../actions/abilitiesAction';
export function AppReducer(
  state: AppState = initialState,
  action: AppAction,
): AppState {
  return {
    pokemonList: PokemonListReducer(state.pokemonList, action as PokemonListAction),
    pokemonDetail: PokemonDetailReducer(state.pokemonDetail, action as PokemonDetailAction),
    typeState: typeReducer(state.typeState, action as TypeAction),
    abilitiesState: AbilitiesReducer(state.abilitiesState, action as AbilitiesAction),
  };
}
