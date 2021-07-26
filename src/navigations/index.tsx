import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs'

const Stack = createStackNavigator();

function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigation;
