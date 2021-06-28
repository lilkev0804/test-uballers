import {create} from 'eslint/lib/rules/*';
import {createStore} from 'redux';
import toggleFavorite from './Reducers/favoriteReducer';

export default createStore(toggleFavorite);
