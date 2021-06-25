import React from 'react';
import {SafeArray, Text, StyleSheet, ScrollView} from 'react-native';
import data from '../groundsData.json';

import Card from '../components/cartPlayground/Card';

export default function PlaygroundList() {
  return (
    <ScrollView style={style.containerAllGround}>
      {data.allGrounds.map((ground, i) => (
        <Card key={i} title={ground.groundName}></Card>
      ))}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containerAllGround: {
    flex: 1,
  },
});
