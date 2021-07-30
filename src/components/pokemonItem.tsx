import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Box, Image,  } from "native-base"
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
        style={styles.box}
    >
        <Image alt="Sin imagen por el momento." source={{uri:api.images+item.url.slice(34, -1)+'.png'}} size="xl" />
        <Text style={styles.text}>{item.name}</Text>
    </Box>
  );
}
const styles = StyleSheet.create({
  box:{
    borderWidth: 2,
    borderRadius: 10,
    borderColor:'#a1a1aa'
  },
  text:{
    alignSelf:'center',
    color: 'white',
    fontSize:20
  }
});
export default PokemonItem;
