import React from 'react';
import {View, ScrollView, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import data from '../groundsData.json';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/cartPlayground/Card';

export default function PlaygroundFavorite() {
  const navigation = useNavigation();
  return (
    <ScrollView>
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
