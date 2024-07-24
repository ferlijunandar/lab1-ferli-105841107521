import React from 'react';
import { View, Text, Image } from 'react-native';

const FavoriteScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../../assets/favorites.jpg')} style={{ width: 100, height: 100 }} />
      <Text>Favorite Screen</Text>
    </View>
  );
};

export default FavoriteScreen;
