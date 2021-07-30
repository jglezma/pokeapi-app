import { pokemonDetail } from "../types/state/pokemonDetail";
import { PokemonSprites } from "../types/state/pokemonDetail";

export const pokemonDetailStore: pokemonDetail = {
    id: 0,
    name: null,
    base_experience: 0,
    height: 0,
    is_default: false,
    order: 0,
    weight: 0,
    abilities: [],
    forms: [],
    game_indices: [],
    held_items: [],
    location_area_encounters: null,
    moves: [],
    sprites: Object(),
    species: Object(),
    stats: [],
    types: [],
};