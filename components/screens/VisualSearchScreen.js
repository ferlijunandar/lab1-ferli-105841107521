import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VisualSearchScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../../assets/foto2.jpeg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.description}>Search for an outfit by taking a photo or uploading an image</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Take a Photo pressed')}
          >
            <Text style={styles.buttonText}>Take a Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.transparentButton}
            onPress={() => navigation.navigate('Main', { screen: 'Home' })}
          >
            <Text style={styles.transparentButtonText}>Upload an Image</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },

  description: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: 'red', 
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
    width: '100%', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transparentButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  transparentButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VisualSearchScreen;
