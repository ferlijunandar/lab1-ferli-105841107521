import React from "react";
import { View, TextInput } from "react-native-web";

const TextInputCustom = ({ name, color }) => {
  return (
    <TextInput
      placeholder={`${name}`}
      style={{
        height: 60,
        width: 300,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        color: color,
      }}
    />
  );
};

const TextInputContainer = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <TextInputCustom name="name" color="black" />
      <TextInputCustom name="Email" color="black" />
      <TextInputCustom name="Password" color="black" />
    </View>
  );
};

export default TextInputContainer;
