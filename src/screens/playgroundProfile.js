import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import data from '../groundsData.json';

export default function PlaygroundProfile({route, navigation}) {
  const {id} = route.params;
  const [playGround, setPlayGround] = useState([]);
  const [favoris, setfavoris] = useState(false);
  useEffect(() => {
    data.allGrounds.map(ground =>
      ground.groundId === id ? setPlayGround(ground) : console.log('error'),
    );
  }, []);

  const handlefavorite = () => {
    setfavoris(!favoris);
  };

  return (
    <ScrollView>
      <View style={style.containerFavorite}>
        {favoris ? (
          <TouchableOpacity onPress={() => handlefavorite()}>
            <Image
              style={style.favorite}
              source={require('../../assets/Favoris-ok.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handlefavorite()}>
            <Image
              style={style.favorite}
              source={require('../../assets/Favoris-no.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={style.containerTitle}>
        <Image
          style={style.image}
          source={require('../../assets/basketball-ball.png')}
        />
        <Text style={style.title}>{playGround.groundName}</Text>
      </View>
      <View style={style.containerInformation}>
        <View style={style.line}>
          <Image
            style={style.imageDescritpion}
            source={require('../../assets/Localisation.png')}
          />
          <Text style={style.text}>{playGround.address}</Text>
        </View>
        <View style={style.line}>
          {playGround.limit === 'public' ? (
            <Image
              style={style.imageDescritpion}
              source={require('../../assets/Group.png')}
            />
          ) : (
            <Image
              style={style.imageDescritpion}
              source={require('../../assets/Group.png')}
            />
          )}
          <Text style={style.text}>
            {playGround.limit ? playGround.limit : 'Aucune information'}
          </Text>
        </View>
        <View style={style.line}>
          <Image
            style={style.imageDescritpion}
            source={require('../../assets/panier.png')}
          />
          <Text style={style.text}>
            {playGround.basketNumber
              ? `${playGround.basketNumber} paniers `
              : 'Aucune information'}{' '}
          </Text>
        </View>
        <View style={style.line}>
          <Image
            style={style.imageDescritpion}
            source={require('../../assets/transport.png')}
          />
          <Text style={style.text}>
            {playGround.transport ? playGround.transport : 'Aucune information'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containerFavorite: {
    flex: 1,
    alignItems: 'flex-end',
  },
  favorite: {
    marginRight: 15,
    marginTop: 15,
  },
  containerTitle: {
    width: 300,
    minHeight: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  image: {
    position: 'absolute',
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 5,
    fontWeight: '600',
  },
  containerInformation: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 100,
  },
  imageDescritpion: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
});
