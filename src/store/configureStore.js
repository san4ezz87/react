import {createStore, applyMiddleware} from 'redux';
import citiesReducer from '../reducers';
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const store = createStore(
    citiesReducer,
    initialState,
    applyMiddleware(thunk)
  );
  return store
}