import { AppAction } from '../actions';
import { PokemonListAction } from '../actions/pokemonList';
import { initialState } from '../store';
import { AppState } from '../types/state';
import { PokemonListReducer } from './pokemonList';

export function AppReducer(
  state: AppState = initialState,
  action: AppAction,
): AppState {
  return {
    pokemonList: PokemonListReducer(state.pokemonList, action as PokemonListAction)
  };
}
