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
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          options={{title:'PokeAPI', headerRight:()=> (<UseColorMode/>), 
          headerStyle: {backgroundColor: colorMode === 'dark' ? 'black' : 'white'} }} 
          component={HomeScreen}
        />
      </Stack.Navigator>
  );
}

export default HomeNavigation;
