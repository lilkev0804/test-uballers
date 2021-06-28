import React, {useEffect, useState} from 'react';
import {ScrollView, Image} from 'react-native';
import data from '../groundsData.json';
import Card from '../components/cartPlayground/Card';
import {connect, useDispatch} from 'react-redux';

function PlaygroundFavorite(favoristesPlayGround) {
  console.log(favoristesPlayGround);
  const [playGround, setPlayGround] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    data.allGrounds.map(ground =>
      ground.groundId ===  ? setPlayGround(ground) : console.log('error'),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoristesPlayGround]);

  const handlefavorite = e => {
    setFavoris(!favoris);
    const action = {type: 'TOGGLE_FAV', value: playGround.groundName};
    dispatch(action);
  };
  console.log('return : ' + favoristesPlayGround);
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
const mapStateToProps = state => {
  return {
    favoristesPlayGround: state.favoristesPlayGround,
  };
};
export default connect(mapStateToProps)(PlaygroundFavorite);
