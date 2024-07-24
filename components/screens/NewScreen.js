import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const NewScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/new.jpg')} style={styles.wideImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.newtext}>New Collection</Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/sale.jpeg')} style={styles.salelImage} />
            <View style={styles.textOverlay}>
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/hodie.png')} style={styles.smallImage} />
            <View style={styles.textOverlay}>
              <Text style={styles.mentext}>Men's Hoodie</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/black.jpg')} style={styles.blacklImage} />
            <View style={styles.textOverlay}>
              <Text style={styles.blacktext}>Black</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    alignItems: 'flex-start', 
  },
  imageContainer: {
    position: 'relative',
  },
  wideImage: {
    width: 400,
    height: 250,
    resizeMode: 'cover',
    marginTop :-20,
  },
  newtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: -100,
  },
  mentext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: -230,
  },
  blacktext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: -250,
  },
  smallImage: { 
    width: 200,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  salelImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
   blacklImage : {
    width: 200,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: -270,
   },
  textOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default NewScreen;
