import PokemonListActions, { PokemonListAction } from '../actions/pokemonList';
import { pokemonList } from '../store/pokemonList';
import { pokemonState } from '../types/state/pokemonList';

/**
 * Alert state reducer.
 */
export function PokemonListReducer(
  state: pokemonState = pokemonList,
  action: PokemonListAction,
): pokemonState {
  switch (action.type) {
    case PokemonListActions.SET_ITEMS:
      return {
        ...action.payload.pokemonlist
      };

    default:
      return state;
  }
}
