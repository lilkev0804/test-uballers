import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import data from '../groundsData.json';

import Card from '../components/cartPlayground/Card';

export default function PlaygroundList() {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <ScrollView style={style.containerAllGround}>
      <View style={style.containerHeader}>
        <TouchableOpacity>
          <Image
            style={style.filter}
            source={require('../../assets/profile.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleOverlay}>
          <Image
            style={style.filter}
            source={require('../../assets/Filter.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{width: visible ? 300 : 0, height: visible ? 150 : 0}}></View>
      {data.allGrounds.map((ground, i) => (
        <Card
          key={i}
          id={ground.groundId}
          image="Localisation.png"
          title={ground.groundName}
          star
        />
      ))}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containerAllGround: {
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  filter: {
    flex: 1,
    marginTop: 24,
  },
});
