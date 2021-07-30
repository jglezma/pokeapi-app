import React from 'react';
import {
  useColorMode,
  Text,
  Icon,
  Center,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UseColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center bg={colorMode === 'dark' ? 'black' : 'white'}>
      <Icon size='sm' ml={5} mx={4} as={<Ionicons name="contrast" onPress={toggleColorMode}/>} />
    </Center>
  );
}

