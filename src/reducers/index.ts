import { AppAction } from '../actions';
import { PokemonListAction } from '../actions/pokemonList';
import { initialState } from '../store';
import { AppState } from '../types/state';
import { PokemonListReducer } from './pokemonList';
import { PokemonDetailReducer } from './pokemonDetail';
import { PokemonDetailAction } from '../actions/pokemonDetail';
import { typeReducer } from './typeReducer';
import { TypeAction } from '../actions/typeAction';
export function AppReducer(
  state: AppState = initialState,
  action: AppAction,
): AppState {
  return {
    pokemonList: PokemonListReducer(state.pokemonList, action as PokemonListAction),
    pokemonDetail: PokemonDetailReducer(state.pokemonDetail, action as PokemonDetailAction),
    typeState: typeReducer(state.typeState, action as TypeAction)
  };
}
