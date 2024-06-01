import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome Back 
        </Text>
      <Image
        source={require('./assets/logo1.jpg')}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Email Address
        </Text>
        <TextInput style={styles.input} placeholder="Enter email address" />
        <Text style={styles.label}>
          Password
          </Text>
        <TextInput style={styles.input} placeholder="Enter password" secureTextEntry />
        <Text style={styles.forgotPassword}>
          Forget password?
          </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Login
            </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  image: {
    width: 210,
    height: 210,
    marginVertical: 30,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 10,
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: 30,
    borderColor: 'blue',
    color: '#0172CB',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0172CB',
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default App;

