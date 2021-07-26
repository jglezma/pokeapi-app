import React from 'react';
import {
  NativeBaseProvider,
  VStack,
  useColorMode,
  Text,
  Button,
  Center,
} from 'native-base';

export default function UseColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center bg={colorMode === 'dark' ? 'black' : 'white'}>
      <Button m={1} onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

