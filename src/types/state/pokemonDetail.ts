export type pokemonDetail = {
    id: number;
    name: string | null;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string | null;
    moves: PokemonMove[];
    sprites: PokemonSprites;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType[];
  };
  
export type PokemonAbility = {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
}

export type PokemonType = {
    slot: number;
    type: NamedAPIResource;
}

export type PokemonHeldItem = {
    item: NamedAPIResource;
    version_details: PokemonHeldItemVersion[];
}

export type PokemonHeldItemVersion = {
    version: NamedAPIResource;
    rarity: number;
}

export type PokemonMove = {
    move: NamedAPIResource;
    version_group_details: PokemonMoveVersion[];
}

export type PokemonMoveVersion = {
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
    level_learned_at: number;
}

export type PokemonStat = {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
}

export type PokemonSprites = {
    front_default: string | null;
    front_shiny: string | null;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_shiny: string | null;
    back_female: string | null;
    back_shiny_female: string | null;
}

export type NamedAPIResource = {
    name : string;
    url: string;
}

export type VersionGameIndex = {
    game_index : number;
    version: NamedAPIResource;
}