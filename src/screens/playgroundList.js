import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import data from '../groundsData.json';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import Card from '../components/cartPlayground/Card';

function PlaygroundList() {
  const navigation = useNavigation();
  const [filter, setFilter] = useState(false);
  const [myFilter, setMyFilter] = useState();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  let radio_props = [
    {label: 'Publics', value: 0},
    {label: 'Privés', value: 1},
    {label: 'Tous les terrains', value: 2},
  ];

  const handleFilter = value => {
    setFilter(true);
    if (value === 0) {
      setMyFilter('public');
    } else if (value === 1) {
      setMyFilter('prive');
    } else {
      setMyFilter('all');
    }
  };

  return (
    <ScrollView style={style.containerAllGround}>
      <View style={style.containerHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Favoris')}>
          <Image
            style={style.filter}
            source={require('../../assets/profile.png')}
          />
        </TouchableOpacity>
      </View>

      <RadioForm
        radio_props={radio_props}
        initial={0}
        formHorizontal={true}
        labelHorizontal={true}
        buttonColor={'#DC691D'}
        animation={true}
        onPress={value => handleFilter(value)}
      />

      {/* {filter
        ? data.allGrounds.filter((ground, i) =>
            ground.limit === '' ? console.log(ground) : null,
          )
        : data.allGrounds.map((ground, i) => (
            <Card
              key={i}
              id={ground.groundId}
              image="Localisation.png"
              title={ground.groundName}
              star
            />
          ))} */}
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
            ground.limit === 'public' || ground.limit === '' ? (
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
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  filter: {
    flex: 1,
    marginTop: 24,
  },
  btnFilter: {
    backgroundColor: 'green',
    borderColor: 'red',
    borderWidth: 2,
  },
});

const mapStateToProps = state => {
  return {
    favoristesPlayGround: state.favoristesPlayGround,
  };
};

export default connect(mapStateToProps)(PlaygroundList);
