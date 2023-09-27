import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Startup from './screens/startup';
  
import {Routes} from './navigation/routes';
import {navigationRef} from './navigation/utils';
import { HomePage } from './screens';
import colors from './theme/colors';
import AppHeader from './navigation/AppHeader';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary}/>
      <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            screenOptions={{
              header:() => <AppHeader/>,
              headerShown: true,
              gestureEnabled: false,
              animation: 'none',
            }}>
            <Stack.Screen name={Routes.StartUp} component={Startup} />
            <Stack.Screen name={Routes.HomePage} component={HomePage} />
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
