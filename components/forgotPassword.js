import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');
 
  const handleResetPassword = () => {
    console.log(`Password reset requested for email: ${email}`);
  };

  return (
    <View style={styles.container}>
         <View style={styles.textContainer}>
        <TouchableOpacity>
          <Text style={styles.arrowTextforgot}>&#x276E;</Text>
        </TouchableOpacity>
      <Text style={styles.title}>Forgot Password</Text>
    </View>
      <Text style={styles.subtitle}>Please, enter your email address. You will receive
      a link to create a new password via email.</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>SEND</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  arrowTextforgot: {
    fontSize: 40,
    marginRight: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'flex-start',
    justifyContent: 'center',
    marginBottom: 60,
    marginTop: 30,

    
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
  },
  input: {
    fontSize: 20,
    height: 70,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 8,
    padding: 20,
    width: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ForgotPassword;
