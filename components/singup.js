import React from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const singup = () => {
  const navigation = useNavigation();
  const handleGooglesingup = () => {
    console.log("Logging in with Google");
  };

  const handleFacebooksingup = () => {
    console.log("Logging in with Facebook");

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nama"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
        />
      </View>

      <View style={styles.AlreadyTextContainer}>
        <Text style={styles.AlreadyText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.arrowText}>&#8594;</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.socialTextContainer}>
        <Text style={styles.socialText}>Or sign up with social account</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleGooglesingup}>
          <Image
            source={require('../assets/image1.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFacebooksingup}>
          <Image
            source={require('../assets/image2.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'flex-start',
    justifyContent: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 10,
  },
  textInput: {
    fontSize: 16,
    height: 70,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 8,
    padding: 20,
    width: '100%',
  },
  AlreadyTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
  },
  AlreadyText: {
    fontSize: 14,
    color: '#333',
  },
  arrowText: {
    fontSize: 30,
    marginLeft: 5,
    color: 'red',
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  socialTextContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  socialText: {
    fontSize: 14,
    color: '#333',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});

export default singup;
