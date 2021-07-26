import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';
import PokemonListActions from '../actions/pokemonList';
import { Box, FlatList, Center, useColorMode, Image } from "native-base"
import { api } from '../utils/api';

function PokemonItem(item: any) {
  return (
    <Box 
        px={2} 
        py={2} 
        rounded="md" 
        my={2} 
        mx={2} 
        shadow={5} 
        bg={'#d4d4d8'} 
        width="45%" 
        style={styles.box}
    >
        <Image alt="Sin imagen por el momento." source={{uri:api.images+item.url.slice(34, -1)+'.png'}} size="xl" />
        {item.name}
    </Box>
  );
}
const styles = StyleSheet.create({
  box:{
    borderWidth: 2,
    borderRadius: 10,
    borderColor:'#a1a1aa'
  }
});
export default PokemonItem;
