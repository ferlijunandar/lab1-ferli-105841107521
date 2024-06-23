import React from "react";
import { View } from "react-native-web";
import TextInputContainer from "./components/text input";
const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <TextInputContainer />
    </View>
  );
};

export default App;
