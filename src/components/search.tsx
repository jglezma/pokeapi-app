import React from "react";
import { VStack, Input, Icon } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function SearchBar(props: any){
    console.log('name', props);
    
  return (
    <VStack space={8} width="100%">
      <VStack width="95%" space={2} alignSelf="center">
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.200"
          value={props.name}
          onChangeText={props.search}
          borderRadius={10}
          py={1}
          px={2}
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
            }}
          InputLeftElement={<Icon size='sm' ml={2} color="gray.400" as={<Ionicons name="ios-search" />} />}
        />
      </VStack>
      </VStack>
  )
}
