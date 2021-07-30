import PokemonDetailActions, { PokemonDetailAction } from '../actions/pokemonDetail';
import { pokemonDetailStore } from '../store/pokemonDetail';
import { pokemonDetail } from '../types/state/pokemonDetail';

/**
 * Alert state reducer.
 */
export function PokemonDetailReducer(
  state: pokemonDetail = pokemonDetailStore,
  action: PokemonDetailAction,
): pokemonDetail {
  switch (action.type) {
    case PokemonDetailActions.SET_ITEMS:
      return {
        ...action.payload.pokemonDetailStore
      };

    default:
      return state;
  }
}
