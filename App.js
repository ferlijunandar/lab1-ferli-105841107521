import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Login from './components/login';
import Singup from './components/singup';
import ForgotPassword from './components/forgotPassword';
const App = () => {
  return (  
    <ScrollView contentContainerStyle={styles.container}>
        {/* <ForgotPassword/> */}
      {/* <login /> */}
      <Singup />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
});

export default App;
