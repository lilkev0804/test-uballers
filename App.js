/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PlaygroundList from './src/screens/PlaygroundList';
import PlaygroundProfile from './src/screens/PlaygroundProfile';
import PlaygroundFavorite from './src/screens/PlaygroundFavorite';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#DC691D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
            letterSpacing: 5,
          },
        }}>
        <Stack.Screen name="Liste des terrains" component={PlaygroundList} />
        <Stack.Screen name="Fiche terrain" component={PlaygroundProfile} />
        <Stack.Screen name="Favoris" component={PlaygroundFavorite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
