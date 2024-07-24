import React from 'react';
import { View, Text, Image } from 'react-native';

const BagScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../../assets/bag.jpg')} style={{ width: 100, height: 100 }} />
      <Text>Bag Screen</Text>
    </View>
  );
};

export default BagScreen;
