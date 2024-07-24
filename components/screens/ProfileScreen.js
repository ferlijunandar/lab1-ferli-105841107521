import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const profileImage = require('../../assets/foto2.jpeg');

export default function MyProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyProfile</Text>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={profileImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Ferli j</Text>
          <Text style={styles.email}>ferli@gmail.com</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.orders}>My Orders</Text>
        <Icon name="chevron-forward" size={19} style={styles.icon} />
      </View>
      <Text style={styles.orderCount}>Already have 12 orders</Text>
      <View style={styles.row}>
        <Text style={styles.shippingAddresses}>Shipping addresses</Text>
        <Icon name="chevron-forward" size={19} style={styles.icon} />
      </View>
      <Text style={styles.addressCount}>3 addresses</Text>
      <View style={styles.row}>
        <Text style={styles.paymentMethods}>Payment methods</Text>
        <Icon name="chevron-forward" size={19} style={styles.icon} />
      </View>
      <Text style={styles.paymentMethod}>Visa **34</Text>
      <View style={styles.row}>
        <Text style={styles.promocodes}>Promocodes</Text>
        <Icon name="chevron-forward" size={19} style={styles.icon} />
      </View>
      <Text style={styles.promoText}>You have special promocodes</Text>
      <View style={styles.row}>
        <Text style={styles.reviews}>My reviews</Text>
        <Icon name="chevron-forward" size={19} style={styles.icon} />
      </View>
      <Text style={styles.reviewCount}>Reviews for 4 items</Text>
      <View style={styles.row}>
        <Text style={styles.settings}>Settings</Text>
        <Icon name="chevron-forward" size={20} style={styles.icon} />
      </View>
      <Text style={styles.settingsText}>Notifications, password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop: 4,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: './assets/font/Metropolis-Bold',
    marginBottom: 12,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 60,
    marginTop: -20,
  },
  infoContainer: {
    marginLeft: 20,
    justifyContent: 'center',
    marginTop: -50,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 15,
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  orders: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: './assets/font/Metropolis-Bold',
  },
  orderCount: {
    fontSize: 15,
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
  shippingAddresses: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: './assets/font/Metropolis-Bold',
  },
  addressCount: {
    fontSize: 16,
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
  paymentMethods: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: './assets/font/Metropolis-Bold',
  },
  paymentMethod: {
    fontSize: 16,
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
  promocodes: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: './assets/font/Metropolis-Bold',
  },
  promoText: {
    fontSize: 16,
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
  reviews: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: './assets/font/Metropolis-Bold',
  },
  reviewCount: {
    fontSize: 16,
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
  settings: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: './assets/font/Metropolis-Bold',
  },
  settingsText: {
    fontSize: 16,
    fontFamily: './assets/font/Metropolis-SemiBold',
  },
  icon: {
    marginLeft: 30,
    marginRight: 10,
    marginTop:27,
   
  },
});
