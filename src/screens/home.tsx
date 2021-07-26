import * as React from 'react';
import { useAppContext } from '../context/AppContext';
import PokemonListActions from '../actions/pokemonList';
import { FlatList, Center, useColorMode } from "native-base"
import { api } from '../utils/api';
import PokemonItem from '../components/pokemonItem';
import SearchBar from '../components/search';
import { NamedAPIResource } from '../types/state/pokemonList';

function HomeScreen() {
  const {state, dispatch} = useAppContext()!;
  const { colorMode, toggleColorMode } = useColorMode();
  const [ filterData, setfilterData ] = React.useState([]);
  const [ nameSearch, setNameSearch ] = React.useState('');

  React.useEffect(() =>{
    fetchPokemonList()
  }, [])

  const fetchPokemonList = () => {
    fetch(api.api+'pokemon/?offset=0&limit=2000')
    .then(response => response.json()).
    then(pokemons => {
      dispatch({
        type: PokemonListActions.SET_ITEMS, 
        payload:{pokemonlist:pokemons}
      })
    })
  }
  const search = (searchText: any) => {
    setNameSearch(searchText.toLowerCase( ))
    let filteredData: any = state.pokemonList.results.filter(function (item) {
      return item.name.includes(searchText);
    });
    setfilterData(filteredData)
    console.log(filteredData,'filter',searchText);
    
  };
  return (
    <Center flex={1} bg={colorMode === 'dark' ? 'black' : 'white'}>
      <SearchBar name={nameSearch} search={search}/>
       <FlatList
        data={filterData && filterData.length > 0 ? filterData : state.pokemonList.results}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonItem {...item}/>
        )}
        keyExtractor={(item) => item.url}
      />
      </Center>
  );
}

export default HomeScreen;
