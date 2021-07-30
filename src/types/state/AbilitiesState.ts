export type abilitiesState = {
    id: number;
    name: string | null;
    is_main_series: boolean;
    generation: NamedAPIResource;
    names: Name[];
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    flavor_text_entries: AbilityFlavorText[];
    pokemon: AbilityPokemon[];
  };
  
export type NamedAPIResource = {
    name : string;
    url: string;
}

export type AbilityEffectChange = {
    effect_entries: Effect[];
    version_group: NamedAPIResource;
}

export type AbilityFlavorText = {
    flavor_text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
}

export type AbilityPokemon = {
    is_hidden: boolean;
    slot: number;
    pokemon: NamedAPIResource;
}

export type Name = {
    name: string;
    language: NamedAPIResource;
}

export type VerboseEffect = {
    effect: string;
    short_effect: string;
    language: NamedAPIResource;
}

export type Effect = {
    effect: string;
    language: NamedAPIResource;
}