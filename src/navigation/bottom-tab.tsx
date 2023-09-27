import React from 'react';
import {PixelRatio, StyleSheet, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Filter, Help, Home, Setting} from '@optiblock/assets/icons/tab';
import ObText from '@optiblock/components/common/ObText';
import {FilterPage, HelpPage, HomePage, SettingPage} from '@optiblock/screens';
import {colors} from '@optiblock/theme';

import {Routes} from './routes';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const renderTabBarIcon = (route: any, focused: any) => {
    const iconColor = focused ? colors.tab_active : colors.tab_icon;
    let icon = <Home color={iconColor} />;
    switch (route.name) {
      case Routes.Home:
        icon = <Home color={iconColor} />;
        break;
      case Routes.Filter:
        icon = <Filter color={iconColor} />;
        break;
      case Routes.Help:
        icon = <Help color={iconColor} />;
        break;
      case Routes.Setting:
        icon = <Setting color={iconColor} />;
        break;
      default:
        break;
    }
    return (
      <View style={styles(focused).focusedTabStyle}>
        {icon}
        <ObText
          textStyle={{fontSize: 12, marginTop: 5, color: colors.text}}
          title={route.name}
        />
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.bottom_tab,
          height: PixelRatio.getPixelSizeForLayoutSize(40),
        },
        tabBarIcon: ({focused}) => renderTabBarIcon(route, focused),
      })}>
      <Tab.Screen name={Routes.Home} component={HomePage} />
      <Tab.Screen name={Routes.Filter} component={FilterPage} />
      <Tab.Screen name={Routes.Help} component={HelpPage} />
      <Tab.Screen name={Routes.Setting} component={SettingPage} />
    </Tab.Navigator>
  );
};

const styles = (focused?: Boolean) =>
  StyleSheet.create({
    focusedTabStyle: {
      height: 65,
      borderRadius: 24,
      width: 65,
      backgroundColor: focused ? '#21253f' : 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default BottomTab;
