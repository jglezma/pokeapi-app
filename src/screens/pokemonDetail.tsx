import * as React from 'react';
import { useAppContext } from '../context/AppContext';
import PokemonDetailActions from '../actions/pokemonDetail';
import { FlatList, Center, useColorMode, Image, View, Text } from "native-base"
import { api } from '../utils/api';
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeListStackParamsList } from '../navigations/homeNavigator';
import { RouteProp } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native'

type ScreenNavigationProp = StackNavigationProp<
HomeListStackParamsList,
  'PokemonDetailScreen'
>;

type PokemonDetailRouteProp = RouteProp<HomeListStackParamsList, 'PokemonDetailScreen'>;

// Definition of screen props
type Props = {
  navigation: ScreenNavigationProp;
  route: PokemonDetailRouteProp;
};

function PokemonDetailScreen({ navigation, route }: Props) {
  const {state, dispatch} = useAppContext()!;
  const { colorMode, toggleColorMode } = useColorMode();

  const {url} = route.params;
  React.useEffect(() =>{
    const unsubscribe = navigation.addListener('focus', () => {
      fetchPokemonDetail()
    });
    return unsubscribe;
  }, [])

  const fetchPokemonDetail = () => {
    fetch(url)
    .then(response => response.json()).
    then(pokemons => {
        console.log('state', pokemons);
        dispatch({
        type: PokemonDetailActions.SET_ITEMS, 
        payload:{pokemonDetailStore:pokemons}
      })
    }) 
  }


  return (
    <Center flex={1} bg={colorMode === 'dark' ? 'black' : 'white'}>
      <Text style={styles.title}>{state.pokemonDetail.name}</Text>
      <View style={styles.horizontal}>
        <Image alt="Sin imagen por el momento." source={{uri:api.images+url.slice(34, -1)+'.png'}} size="xl" />
        <Image alt="Sin imagen por el momento." source={{uri:state.pokemonDetail.sprites?.back_default || ''}} size="xl" />
      </View>
      <Text style={styles.title}>Shiny:</Text>
      <View style={styles.horizontal}>
        <Image alt="Sin imagen por el momento." source={{uri:state.pokemonDetail.sprites?.front_shiny || ''}} size="xl" />
        <Image alt="Sin imagen por el momento." source={{uri:state.pokemonDetail.sprites?.back_shiny || ''}} size="xl" />
      </View>
      <Text style={styles.title}>Stats:</Text>
      <FlatList
        data={state.pokemonDetail.stats}
        style={styles.alignleft}
        renderItem={({ item }) => (
          <View style={styles.horizontal}>
            <Text style={styles.bold}>{item.stat.name}: </Text><Text>{item.base_stat}</Text>
          </View>
        )}
        keyExtractor={(item) => item.url}
      />
      <Text style={styles.title}>Abilities:</Text>
      <FlatList
        data={state.pokemonDetail.abilities}
        style={styles.alignleft}
        renderItem={({ item }) => (
          <View style={styles.horizontal}>
            <TouchableOpacity onPress={() => navigation.navigate('AbilitiesScreen', {url: item.ability.url })}>
              <Text style={styles.link}>{item.ability.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.url}
      />
      <Text style={styles.title}>Types:</Text>
      <FlatList
        data={state.pokemonDetail.types}
        style={styles.alignleft}
        renderItem={({ item }) => (
          <View style={styles.horizontal}>
            <TouchableOpacity onPress={() => navigation.navigate('TypeScreen', {url: item.type.url })}>
              <Text style={styles.link}>{item.type.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.url}
      />
      
    </Center>
  );
}
const styles = StyleSheet.create({
    horizontal:{
      flexDirection:'row',
    },
    alignleft:{
      alignSelf:'flex-start',
      marginLeft:20
    },
    bold:{
      fontWeight:'800'
    },
    title:{
      fontSize:23
    },
    link:{
      fontStyle:'italic',
      color:'blue',
      textDecorationLine:'underline'
    }
  });

export default PokemonDetailScreen;
