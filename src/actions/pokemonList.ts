import { pokemonState } from "../types/state/pokemonList";
enum PokemonListActions {
    SET_ITEMS = 'SET_ITEMS',
  }
  
  type SetItemPokemonsAction = {
    type: PokemonListActions.SET_ITEMS;
    payload: {
      pokemonlist: pokemonState;
    };
  };

  
  export type PokemonListAction = SetItemPokemonsAction;
  
  export default PokemonListActions;
  