import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './homeNavigator';
import Icon from 'react-native-vector-icons/AntDesign';
import { useColorMode } from "native-base"

const Tab = createBottomTabNavigator();

function Tabs() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colorMode === 'dark' ? 'black' : 'white',
      inactiveBackgroundColor: colorMode === 'dark' ? 'black' : 'white',
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons: any = {
          HomeStack: 'home',
          Profile: 'user',
        };
  
        return (
          <Icon
            name={icons[route.name] as any}
            color={color}
            size={size}
          />
        );
      },
    })}
    >
      <Tab.Screen name="HomeStack" component={HomeNavigation} />
    </Tab.Navigator>
  );
}

export default Tabs;
