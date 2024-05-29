import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 30
        
      }}>
        <View style={{
          backgroundColor: "gray", width: 175, height: 60,
          justifyContent: "center",
          borderRadius: 15,
          marginRight: 15,
          marginBottom: 15,

        }}>
          <Text style={{
            fontSize: 21, color: "black",
            textAlign: "center",
            fontWeight: "bold",
          }}>
            Login
          </Text>
        </View>

        <View style={{
          backgroundColor: "gray", width: 175, height: 60,
          justifyContent: "center",
          borderRadius: 15,
          marginLeft: 15,
          marginBottom: 15,

        }}>
          <Text style={{

            fontSize: 21, color: "black",
            textAlign: "center",
            fontWeight: "bold",
          }}>
            Register
          </Text>
        </View>

      </View>

    </View>

  )
}

export default App;
