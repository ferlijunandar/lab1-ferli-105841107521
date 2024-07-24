import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCheckPress = () => {
    navigation.navigate('New');
  };

  return (
    <ImageBackground 
      source={require('../../assets/fashion.jpg')} 
      style={styles.background}
      imageStyle={{ resizeMode: 'contain' }} // Change to 'stretch' if you want to stretch the image
    >
      <View style={styles.overlay}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.content}>
            <Text style={styles.title}>Fashion Sale</Text>
            <TouchableOpacity style={styles.button} onPress={handleCheckPress}>
              <Text style={styles.buttonText}>Check</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adds a semi-transparent overlay for better text visibility
    padding: 10,
    justifyContent: 'flex-start',
  },
  content: {
    alignItems: 'flex-start',
    top: 100,
  },
  title: {
    fontSize: 40,
    textAlign: 'left', // Align text to the left
    marginBottom: 20, 
    color: '#fff', // White text for contrast against background image
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
