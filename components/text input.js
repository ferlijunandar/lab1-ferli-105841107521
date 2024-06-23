import React from "react";
import { TextInput } from "react-native-web";
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
        paddingLeft: 20,
        color: color,
      }}
    />
  );
};

export default TextInputCustom;