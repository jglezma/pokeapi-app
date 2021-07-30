export type typeState = {
    id: number;
    name: string;
    damage_relations: TypeRelations;
    game_indices: GenerationGameIndex[];
    generation: NamedAPIResource;
    move_damage_class: NamedAPIResource;
    names: Name[];
    pokemon: TypePokemon[];
    moves: NamedAPIResource[];
  };
  
export type NamedAPIResource = {
      name : string;
      url: string;
}

export type TypePokemon = {
    slot : number;
    pokemon: NamedAPIResource;
}

export type TypeRelations = {
    no_damage_to : NamedAPIResource;
    half_damage_to: NamedAPIResource;
    double_damage_to: NamedAPIResource;
    no_damage_from: NamedAPIResource;
    half_damage_from: NamedAPIResource;
    double_damage_from: NamedAPIResource;
}

export type GenerationGameIndex = {
    game_index : number;
    generation: NamedAPIResource;
}

export type Name = {
    name : string;
    language: NamedAPIResource;
}