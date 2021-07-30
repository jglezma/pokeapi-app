import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import PokemonDetailScreen from '../screens/pokemonDetail';
import TypeScreen from '../screens/type';
import AbilitiesScreen from '../screens/abilities';
import UseColorMode from '../components/colorMode';
import {
  useColorMode
} from 'native-base';

export type HomeListStackParamsList = {
  HomeScreen: undefined;
  PokemonDetailScreen: {url:any};
  TypeScreen: {url:any};
  AbilitiesScreen: {url:any};
};
const Stack = createStackNavigator<HomeListStackParamsList>();

function HomeNavigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Stack.Navigator screenOptions={{headerStyle:{borderWidth:10, backgroundColor: 'tomato' }}}>
        <Stack.Screen 
          name="HomeScreen" 
          options={{title:'Pokemon List', headerTintColor: colorMode === 'dark' ? 'white' : 'black',
          headerRight:()=> (<UseColorMode/>), 
          headerStyle: {backgroundColor: colorMode === 'dark' ? 'black' : 'white',shadowRadius: 0, shadowOffset:{height: 0}} }} 
          component={HomeScreen}
        />
        <Stack.Screen 
          name="PokemonDetailScreen" 
          options={{title:'Pokemon Detail', headerTintColor: colorMode === 'dark' ? 'white' : 'black',
          headerRight:()=> (<UseColorMode/>), 
          headerStyle: {backgroundColor: colorMode === 'dark' ? 'black' : 'white',shadowRadius: 0, shadowOffset:{height: 0}} }} 
          component={PokemonDetailScreen}
        />
        <Stack.Screen 
          name="TypeScreen" 
          options={{title:'Type', headerTintColor: colorMode === 'dark' ? 'white' : 'black',
          headerRight:()=> (<UseColorMode/>), 
          headerStyle: {backgroundColor: colorMode === 'dark' ? 'black' : 'white',shadowRadius: 0, shadowOffset:{height: 0}} }} 
          component={TypeScreen}
        />
        <Stack.Screen 
          name="AbilitiesScreen" 
          options={{title:'Abilities', headerTintColor: colorMode === 'dark' ? 'white' : 'black',
          headerRight:()=> (<UseColorMode/>), 
          headerStyle: {backgroundColor: colorMode === 'dark' ? 'black' : 'white',shadowRadius: 0, shadowOffset:{height: 0}} }} 
          component={AbilitiesScreen}
        />
      </Stack.Navigator>
  );
}

export default HomeNavigation;
