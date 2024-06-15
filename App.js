import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "./components/Button";
const App = () => {
  return (
    <View style={styles.appContainer}>
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
