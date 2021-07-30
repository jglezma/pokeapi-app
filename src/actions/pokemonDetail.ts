import { pokemonDetail } from "../types/state/pokemonDetail";
enum PokemonDetailActions {
    SET_ITEMS = 'SET_ITEMS',
  }
  
  type SetItemPokemonDetailAction = {
    type: PokemonDetailActions.SET_ITEMS;
    payload: {
        pokemonDetailStore: pokemonDetail;
    };
  };

  
  export type PokemonDetailAction = SetItemPokemonDetailAction;
  
  export default PokemonDetailActions;
  