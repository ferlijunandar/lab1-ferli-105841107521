import React from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Login = () => {
  const handleGoogleLogin = () => {
    console.log("Logging in with Google");
  };

  const handleFacebookLogin = () => {
    console.log("Logging in with Facebook");
    
  };
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.textContainer}>
        <TouchableOpacity>
          <Text style={styles.arrowTextlogin}>&#x276E;</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Login</Text>
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
        <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        <TouchableOpacity>
          <Text style={styles.arrowText}>&#8594;</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}> Login</Text>
        </TouchableOpacity>
  
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleGoogleLogin}>
          <Image
            source={require('../assets/image1.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFacebookLogin}>
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
  arrowTextlogin: {
    fontSize: 40,
    marginRight: 50,
    marginTop: -20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'flex-start',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 30,
  },

  inputContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  textInput: {
    fontSize: 16,
    height: 70,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    padding: 20,
    width: '100%',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#333',
  },
  arrowText: {
    fontSize: 21,
    marginLeft: 8,
    color: 'red',
  },
  button: {
     backgroundColor: 'red',
     padding: 15,
     marginTop: 20,
     borderRadius: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});


export default Login;
