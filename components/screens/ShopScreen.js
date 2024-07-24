import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const ShopScreen = () => {
  const { width } = Dimensions.get('window');

  const saleItems = [
    { id: 1, image: require('../../assets/epening.jpg'), name: 'Evening Dress', price: '15$', originalPrice: '22$', discount: '-20%' },
    { id: 2, image: require('../../assets/sport.jpg'), name: 'Sport Dress', price: '19$', originalPrice: '23$', discount: '-15%' },
    { id: 3, image: require('../../assets/fassion.jpeg'), name: 'Fashion Dress', price: '30$', originalPrice: '28$', discount: '-17%' },
   
  ];

  const newItems = [
    { id: 1, image: require('../../assets/baju kaos.jpg'), name: 'New Item 1' },
    { id: 2, image: require('../../assets/baju1.jpeg'), name: 'New Item 2' },
    { id: 3, image: require('../../assets/epening.jpg'), name: 'New Item 3' },
   
  ];

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../../assets/super sale.jpeg')} style={[styles.header, { width }]}>
        <Text style={styles.headerText}>Street clothes</Text>
      </ImageBackground>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sale</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {saleItems.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>
              <Text style={styles.originalPrice}>{item.originalPrice} </Text>
              <Text style={styles.discount}>{item.discount}</Text>
            </Text>
            <Text style={styles.currentPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>New</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {newItems.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 170,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: 'blue',
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    marginRight: 15,
    alignItems: 'center',
    width: 150,
  },
  itemImage: {
    width: 120,
    height: 130,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  discount: {
    color: 'red',
  },
  originalPrice: {
    color: 'gray',
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShopScreen;
