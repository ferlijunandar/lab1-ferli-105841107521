import React from 'react';
import { View } from 'react-native';
import TextInputCustom from './components/text input';

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <TextInputCustom name="name" color="black" />
      <TextInputCustom name="email" color="black" />
      <TextInputCustom name="Password" color="black" />
    </View>
  );
}

export default App;