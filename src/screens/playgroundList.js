import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import data from '../groundsData.json';
import axios from 'axios';
import Card from '../components/cartPlayground/Card';

export default function PlaygroundList() {
  return (
    <View style={style.containerAllGround}>
      {/* {data.allGrounds.map((ground, i) => ( */}
      <Card></Card>
      <Card></Card>
      <Card></Card>
      {/* ))} */}
    </View>
  );
}

const style = StyleSheet.create({
  containerAllGround: {
    flex: 1,
    width: 400,
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',

  },
});
