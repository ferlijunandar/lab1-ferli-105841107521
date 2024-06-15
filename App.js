import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const App = () => {
  const ButtonCustom = ({ color, text }) => {
    return (
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    );
  };
return (
  <View style={ styles.container}>
    <Text style= {styles.title}>WELCOME BACK</Text>
    <Image source={require('./assets/logo1.jpg')}
    style={styles.Image}/>
<View style={styles.buttonRow}>
<ButtonCustom color="red" text="Login" />
<ButtonCustom color="blue" text="Register" />
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '45%',
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