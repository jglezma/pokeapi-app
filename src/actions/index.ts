import { PokemonListAction } from './pokemonList';
import { PokemonDetailAction } from './pokemonDetail';
import { TypeAction } from './typeAction';
import { AbilitiesAction } from './abilitiesAction';

export type AppAction = PokemonListAction | PokemonDetailAction | TypeAction | AbilitiesAction;
