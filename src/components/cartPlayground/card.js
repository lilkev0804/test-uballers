import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const image = {
  uri: 'https://images.unsplash.com/photo-1579158950237-a1d86ef408c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
};
export default function Card({title, star, id}) {
  const navigation = useNavigation();
  return (
    <View style={style.containerCard}>
      <ImageBackground
        imageStyle={{borderRadius: 25}}
        source={image}
        style={style.image}>
        <TouchableOpacity style={style.star}>
          <Image
            style={style.imageStar}
            source={require('../../../assets/Favoris-ok.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Fiche terrain')}>
        <Text style={style.name}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  containerCard: {
    margin: 20,
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 25,
    backgroundColor: 'white',
  },

  image: {
    flex: 1,
    height: 150,
    width: 300,
    resizeMode: 'cover',
    justifyContent: 'center',
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    width: 300,
    borderRadius: 50,
    backgroundColor: '#DC691D',
  },
  name: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  star: {
    position: 'absolute',
    zIndex: 100,
    top: 10,
    right: 10,
  },
  imageStar: {
    width: 30,
    height: 30,
  },
});
