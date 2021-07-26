import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {create} from 'react-test-renderer';

describe('Icon', () => {
  it('should render as expected', () => {
    const {toJSON} = create(<Icon name={'exit'} />);

    expect(toJSON()).toMatchSnapshot();
  });
});