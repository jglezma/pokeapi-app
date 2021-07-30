import * as React from 'react';
import { useAppContext } from '../context/AppContext';
import TypeActions from '../actions/typeAction';
import { FlatList, Center, useColorMode, Box, Text } from "native-base"
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeListStackParamsList } from '../navigations/homeNavigator';
import { RouteProp } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native'
import PokemonItem from '../components/pokemonItem';

type ScreenNavigationProp = StackNavigationProp<
HomeListStackParamsList,
  'TypeScreen'
>;

type TypeRouteProp = RouteProp<HomeListStackParamsList, 'TypeScreen'>;

// Definition of screen props
type Props = {
  navigation: ScreenNavigationProp;
  route: TypeRouteProp;
};

function TypeScreen({ navigation, route }: Props) {
  const {state, dispatch} = useAppContext()!;
  const { colorMode, toggleColorMode } = useColorMode();

  const {url} = route.params;
  React.useEffect(() =>{
    fetchPokemonDetail()
  }, [])

  const fetchPokemonDetail = () => {
    fetch(url)
    .then(response => response.json()).
    then(types => {
        console.log('type', types);
        dispatch({
        type: TypeActions.SET_ITEMS, 
        payload:{typeReducer:types}
      })
    }) 
  }


  return (
    <Center flex={1} bg={colorMode === 'dark' ? 'black' : 'white'}>
      <Text style={[styles.title, styles.margin]}>{state.typeState.name}</Text>
      <Text style={styles.margin}>Move Damege class: {state.typeState?.move_damage_class?.name }</Text>
      <Text style={styles.title}>Moves:</Text>
      <FlatList
        data={state.typeState.moves}
        style={[styles.alignleft]}
        numColumns={3}
        renderItem={({ item }) => (
            <Box 
                px={2} 
                py={2} 
                rounded="md" 
                my={2} 
                mx={2} 
                width={'28%'}
                style={[styles.box, styles.margin]}
            >
                <Text>{item.name}</Text>
            </Box>
        )}
        keyExtractor={(item) => item.url}
      />
    <Text style={styles.title}>Pokemon:</Text>
    <FlatList
        data={state.typeState.pokemon}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={{width:'48%'}}>
            <PokemonItem {...item.pokemon} />
          </TouchableOpacity>
         
        )}
        keyExtractor={(item) => item.url}
      />
      
    </Center>
  );
}
const styles = StyleSheet.create({
    alignleft:{
      alignSelf:'flex-start',
      marginLeft:20
    },
    title:{
      fontSize:23
    },
    margin:{
      marginBottom:10
    },
    box:{
        borderWidth: 2,
        borderRadius: 10,
        borderColor:'#a1a1aa'
      },
  });

export default TypeScreen;
