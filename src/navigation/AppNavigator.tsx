import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import AddProductScreen from '../screens/AddProductScreen';
import EditProductScreen from '../screens/EditProductScreen';
import {useSelector} from 'react-redux';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  AddProduct: undefined;
  EditProduct: {id: string};
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  const user = useSelector(state => state?.auth?.user);

  if (!user) {
    return (
      <NavigationContainer
        theme={{
          colors: {
            background: '#fff',
          },
        }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: 'Products',
            }}
          />
          <Stack.Screen
            name="AddProduct"
            component={AddProductScreen}
            options={{
              headerTitle: 'Add Product',
            }}
          />
          <Stack.Screen
            name="EditProduct"
            component={EditProductScreen}
            options={{
              headerTitle: 'Edit Product',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
