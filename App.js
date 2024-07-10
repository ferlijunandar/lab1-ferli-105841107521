import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Singup from './components/singup';
import ForgotPassword from './components/forgotPassword';
import Login from './components/login';

// Import gambar
import Home from './assets/home.jpg';
import HomeActive from './assets/home aktif.jpg'; 
import Shop from './assets/shop.jpg';
import ShopActive from './assets/shop aktif.jpg';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to singup"
        onPress={() => navigation.navigate('Singup')}
      />
    </View>
  );
}

function ShopScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Shop Screen</Text>
    </View>
  );
}

function singupScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>singup Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          switch (route.name) {
            case 'home':
              iconSource = focused ? HomeActive : Home;
              break;
            case 'shop':
              iconSource = focused ? ShopActive : Shop;
              break;
            case 'singup':
              iconSource = focused ? ShopActive : Shop;
              break;
          }

          return <Image source={iconSource} style={{ width: size, height: size }} />;
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="shop" component={ShopScreen} />
      <Tab.Screen name="singup" component={singupScreen} options={{ title: 'singup' }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Singup" component={Singup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
