import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>

        <View style={[styles.column, { backgroundColor: 'yellow' }]} />
        < View style={[styles.column, { backgroundColor: 'green' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.column, { backgroundColor: 'red' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.column, { backgroundColor: 'blue' }]} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
});
