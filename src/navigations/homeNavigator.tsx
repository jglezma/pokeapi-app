import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import UseColorMode from '../components/colorMode';
import {
  useColorMode
} from 'native-base';

const Stack = createStackNavigator();

function HomeNavigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Stack.Navigator screenOptions={{headerStyle:{borderWidth:10, backgroundColor: 'tomato' }}}>
        <Stack.Screen 
          name="HomeScreen" 
          options={{title:'PokeAPI', headerTintColor: colorMode === 'dark' ? 'white' : 'black',
          headerRight:()=> (<UseColorMode/>), 
          headerStyle: {backgroundColor: colorMode === 'dark' ? 'black' : 'white',shadowRadius: 0, shadowOffset:{height: 0}} }} 
          component={HomeScreen}
        />
      </Stack.Navigator>
  );
}

export default HomeNavigation;
