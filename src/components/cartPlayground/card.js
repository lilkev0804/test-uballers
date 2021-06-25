import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const image = {
  uri: 'https://images.unsplash.com/photo-1579158950237-a1d86ef408c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
};
export default function Card(props) {
  return (
    <View style={style.containerCard}>
      <ImageBackground source={image} style={style.image}>
        
      </ImageBackground>
      <TouchableOpacity style={style.button} />
    </View>
  );
}

const style = StyleSheet.create({
  containerCard: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    height: 200,
    width: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 50,
  },
  image: {
    flex: 1,
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#484848',
    padding: 10,
  },
});
