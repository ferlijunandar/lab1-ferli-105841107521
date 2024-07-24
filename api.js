import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Singup from './components/singup';
import ForgotPassword from './components/forgotPassword';
import Login from './components/login';
import VisualSearchScreen from './components/screens/VisualSearchScreen';
import HomeScreen from './components/screens/HomeScreen';
import ShopScreen from './components/screens/ShopScreen';
import BagScreen from './components/screens/BagScreen';
import FavoriteScreen from './components/screens/FavoriteScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import NewScreen from './components/screens/NewScreen';
import Home from './assets/home.jpg';
import HomeActive from './assets/home aktif.jpg'; 
import Shop from './assets/shop.jpg';
import ShopActive from './assets/shop aktif.jpg';
import Bag from './assets/bag.jpg';
import BagActive from './assets/bag aktif.jpg';
import Favorites from './assets/favorites.jpg';
import FavoritesActive from './assets/favorites aktif.jpg';
import Profil from './assets/profil.jpg';
import ProfilActive from './assets/profil aktif.jpg';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = focused ? HomeActive : Home;
              break;
            case 'Shop':
              iconSource = focused ? ShopActive : Shop;
              break;
            case 'Bag':
              iconSource = focused ? BagActive : Bag;
              break;
            case 'Favorites':
              iconSource = focused ? FavoritesActive : Favorites;
              break;
            case 'Profile':
              iconSource = focused ? ProfilActive : Profil;
              break;
          }

          return <Image source={iconSource} style={{ width: size, height: size }} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Bag" component={BagScreen} />
      <Tab.Screen name='Favorites' component={FavoriteScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Singup">
        <Stack.Screen name="Singup" component={Singup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VisualSearch" component={VisualSearchScreen} />
        <Stack.Screen name="New" component={NewScreen} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
