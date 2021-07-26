import * as React from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../context/AppContext';
import PokemonListActions from '../actions/pokemonList';
import { Box, FlatList, Center, useColorMode } from "native-base"

function HomeScreen() {
  const {state, dispatch} = useAppContext()!;
  const { colorMode, toggleColorMode } = useColorMode();
  React.useEffect(() =>{
    fetchPokemonList()
  }, [])

  const fetchPokemonList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/').then(response => response.json()).
    then(pokemons => {dispatch({type: PokemonListActions.SET_ITEMS, payload:{pokemonlist:pokemons}})})
  }
  return (
    <Center flex={1} bg={colorMode === 'dark' ? 'black' : 'white'}>
       <FlatList
        data={state.pokemonList.results}
        numColumns={2}
        renderItem={({ item }) => (
          <Box px={2} py={2} rounded="md" my={2} mx={3} bg="primary.300">
            {item.name}
          </Box>
        )}
        keyExtractor={(item) => item.url}
      />
      </Center>
  );
}

export default HomeScreen;
