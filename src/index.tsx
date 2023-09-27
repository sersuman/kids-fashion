import React from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Startup from './screens/startup';
  
import {Routes} from './navigation/routes';
import {navigationRef} from './navigation/utils';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              animation: 'none',
            }}>
            <Stack.Screen name={Routes.StartUp} component={Startup} />
            {/* <Stack.Screen name={Routes.BottomTab} component={BottomTab} /> */}
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
