import Colors from '../constants/Colors';
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../screens/NewsScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';

const Stack = createStackNavigator();
export const stackStyles = {
  headerStyle: { backgroundColor: Colors.tintColor },
  headerTintColor: Colors.white,
  headerTitleAlign: 'center',
  headerTitleContainerStyle: {
    width: Platform.OS === 'ios' ? '60%' : '75%',
    alignItems: 'center'
  },
  headerBackTitleVisible: false,
};

const NewsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={stackStyles}
    >
      <Stack.Screen name='News' component={NewsScreen} options={{ title: 'Notícias '}} />
      <Stack.Screen name='NewsDetail' component={NewsDetailScreen} />
    </Stack.Navigator>
  );
};

export default NewsStack;
