// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

/**
 * Sample React Native Snapshot Test
 */

 import React from 'react';
 import {ActivityIndicator, FlatList, Text, TextInput} from 'react-native';
 import renderer from 'react-test-renderer';
 
 jest.setTimeout(15000);
 
 // These serve as integration tests for the jest-react-native preset.
 it('renders the ActivityIndicator component', () => {
   const tree = renderer
     .create(<ActivityIndicator animating={true} size="small" />)
     .toJSON();
   expect(tree).toMatchSnapshot();
 });
 
 it('renders the TextInput component', () => {
   const tree = renderer
     .create(<TextInput autoCorrect={false} value="apple banana kiwi" />)
     .toJSON();
   expect(tree).toMatchSnapshot();
 });
 
 it('renders the FlatList component', () => {
   const tree = renderer
     .create(
       <FlatList
         data={['apple', 'banana', 'kiwi']}
         keyExtractor={item => item}
         renderItem={({item}) => <Text>{item}</Text>}
       />,
     )
     .toJSON();
   expect(tree).toMatchSnapshot();
 });