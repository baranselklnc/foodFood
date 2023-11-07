/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SearchScreens from './screens/SearchScreens';

const Stack = createNativeStackNavigator();

function App() {
  
  return ( <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={SearchScreens} />
    </Stack.Navigator>
  </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
 
});

export default App;
