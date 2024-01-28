import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Component } from 'react';
import Crud from './src/Model/Banco/crud'

//styles
import layoutStyle from './src/Styles/layoutStyle';


//telas

import HomeScreen from './src/Screens/Home';
import Carrinho from './src/Screens/Carrinho';
import Pagamentos from './src/Screens/Pagamentos';
import Produtos from './src/Screens/Produtos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: []
    }

  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Produtos'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Carrinho') {
                iconName = focused ? 'basket' : 'basket-outline';
  
              } else if (route.name === 'Pagamentos') {
                iconName = focused ? 'credit-card' : 'credit-card-outline';
  
              } else if (route.name === 'Produtos') {
                iconName = focused ? 'cart' : 'cart-outline';
              }
              
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={35} color={'#00815a'} />;
            },
            tabBarActiveTintColor: '#00815a',
            tabBarInactiveTintColor: '#00815a', 
            headerShown: false,
            headerStyle: layoutStyle.headerStyle,
            tabBarStyle: layoutStyle.tabStyle,
            tabBarLabelPosition: 'below-icon',  
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Produtos" component={Produtos}  />
          <Tab.Screen name="Carrinho" component={Carrinho}  />
          
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
