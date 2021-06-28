import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import data from '../groundsData.json';
import {useNavigation} from '@react-navigation/native';

import Card from '../components/cartPlayground/Card';

export default function PlaygroundList() {
  const navigation = useNavigation();
  const [myFilter, setMyFilter] = useState('all');

  let radio_props = [
    {label: 'Tous les terrains', value: 0},
    {label: 'Public', value: 1},
    {label: 'Privé', value: 2},
  ];

  const handleFilter = value => {
    if (value === 1) {
      setMyFilter('public');
    } else if (value === 2) {
      setMyFilter('prive');
    } else {
      setMyFilter('all');
    }
  };

  return (
    <ScrollView style={style.containerAllGround}>
      <View style={style.containerHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Favoris')}>
          <Text style={style.favoris}>Mes favoris</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerRadio}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'#DC691D'}
          animation={true}
          onPress={value => handleFilter(value)}
        />
      </View>

      {myFilter === 'all'
        ? data.allGrounds.map((ground, i) => (
            <Card
              key={i}
              id={ground.groundId}
              image="Localisation.png"
              title={ground.groundName}
              star
            />
          ))
        : myFilter === 'public'
        ? data.allGrounds.map((ground, i) =>
            ground.limit === 'public' ? (
              <Card
                key={i}
                id={ground.groundId}
                image="Localisation.png"
                title={ground.groundName}
                star
              />
            ) : null,
          )
        : data.allGrounds.map((ground, i) =>
            ground.limit === 'prive' ? (
              <Card
                key={i}
                id={ground.groundId}
                image="Localisation.png"
                title={ground.groundName}
                star
              />
            ) : null,
          )}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containerAllGround: {
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
  },
  favoris: {
    flex: 1,
    marginTop: 24,
    marginBottom: 18,
    fontSize: 20,
  },
  containerRadio: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
