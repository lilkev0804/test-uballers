import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Overlay,
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
      <TouchableOpacity onPress={toggleOverlay}>
        <Image
          style={style.filter}
          source={require('../../assets/Filter.png')}
        />
      </TouchableOpacity>
      <View
        style={{width: visible ? 300 : 0, height: visible ? 150 : 0}}></View>
      {data.allGrounds.map((ground, i) => (
        <Card key={i} id={ground.groundId} title={ground.groundName} />
      ))}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containerAllGround: {
    flex: 1,
  },
  filter: {
    flex: 1,
    marginRight: 30,
    marginTop: 24,
    alignSelf: 'flex-end',
  },
});
