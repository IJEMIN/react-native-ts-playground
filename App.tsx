import React from 'react';
import {View} from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import MessageScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';

export default function App() {
  return <Screen>
    <Icon 
    name="email"
    size={100}
    backgroundColor="red"
    iconColor="white"

    />

  </Screen>;
}