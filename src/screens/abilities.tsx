import * as React from 'react';
import { useAppContext } from '../context/AppContext';
import { FlatList, Center, useColorMode, Box, Text } from "native-base"
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeListStackParamsList } from '../navigations/homeNavigator';
import { RouteProp } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native'
import PokemonItem from '../components/pokemonItem';
import AbilitiesActions from '../actions/abilitiesAction';

type ScreenNavigationProp = StackNavigationProp<
HomeListStackParamsList,
  'AbilitiesScreen'
>;

type TypeRouteProp = RouteProp<HomeListStackParamsList, 'AbilitiesScreen'>;

// Definition of screen props
type Props = {
  navigation: ScreenNavigationProp;
  route: TypeRouteProp;
};

function AbilitiesScreen({ navigation, route }: Props) {
  const {state, dispatch} = useAppContext()!;
  const { colorMode, toggleColorMode } = useColorMode();

  const {url} = route.params;
  React.useEffect(() =>{
    fetchAbilities()
  }, [])

  const fetchAbilities = () => {
    fetch(url)
    .then(response => response.json()).
    then(abilities => {
        
        dispatch({
        type: AbilitiesActions.SET_ITEMS, 
        payload:{abilitiesReducer:abilities}
      })
      console.log('abilitiesReducer', abilities);
    }) 
  }


  return (
    <Center flex={1} bg={colorMode === 'dark' ? 'black' : 'white'}>
      <Text style={[styles.title, styles.margin]}>{state.abilitiesState.name}</Text>
      <Text style={styles.title}>Effect Entries:</Text>
      <FlatList
        data={state.abilitiesState.effect_entries}
        style={[styles.effect]}
        renderItem={({ item }) => (
            <>
             {item.language?.name == 'en' ?
                <Box 
                    px={2} 
                    py={2} 
                    rounded="md" 
                    my={2} 
                    mx={2} 
                    width={'90%'}
                    style={[styles.box, styles.margin]}
                >
                    <Text>{item.effect}</Text>
                    <Text>{item.short_effect}</Text>
                </Box> : null
             }
            </>
        )}
        keyExtractor={(item) => item.url}
      />
    <Text style={styles.title}>Pokemon:</Text>
    <FlatList
        data={state.abilitiesState.pokemon}
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
    effect:{
      height:'50%',
      marginLeft:15
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

export default AbilitiesScreen;
