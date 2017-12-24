import {
  GET_CITY_WEATHER_REQUEST,
  GET_CITY_WEATHER_SUCCESS,
  CLEAN_CITY_WEATHER,
  ADD_TO_DASH_BOARD,
  ADD_TO_SELECT,
  SET_RANGE_VALUE,
  DELETE_FROM_DASH_BOARD
} from '../constants/main';

const initialState = {
  cities: [],
  citiesOnDashBoard: [],
  rangeValue: -40
};

export default function citiesReducer(state = initialState, actions) {
  switch (actions.type) {
    case GET_CITY_WEATHER_REQUEST:
      return {...state, cityName: actions.payload};

    case GET_CITY_WEATHER_SUCCESS:
      return {...state, cities: actions.payload};
    case CLEAN_CITY_WEATHER:
      return {...state, cities: []};
    case ADD_TO_DASH_BOARD:
      return {...state, citiesOnDashBoard: [...state.citiesOnDashBoard, actions.payload]};
    case ADD_TO_SELECT:
      return {...state, citiesSelect: actions.payload};
    case SET_RANGE_VALUE:
      return {...state, rangeValue: actions.payload};
    case DELETE_FROM_DASH_BOARD:
      return {...state, citiesOnDashBoard: state.citiesOnDashBoard.filter(item => item.id !== actions.payload.id)};
    default:
      return state;
  }
}