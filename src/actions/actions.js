import {
  GET_CITY_WEATHER_REQUEST,
  GET_CITY_WEATHER_SUCCESS,
  CLEAN_CITY_WEATHER,
  ADD_TO_DASH_BOARD,
  ADD_TO_SELECT,
  SET_RANGE_VALUE,
  DELETE_FROM_DASH_BOARD
} from '../constants/main';


export function getCitiesWeather(cityName) {
  return (dispatch) => {
    dispatch({
      type: GET_CITY_WEATHER_REQUEST,
      payload: cityName
    });

    fetch(`http://localhost:3004/cities?q=${cityName}`).then((response) => {
      response.json().then((data) => {
        dispatch({
          type: GET_CITY_WEATHER_SUCCESS,
          payload: data
        });
      })
    });
  }
}

export function cleanCitiesWeather() {
  return {
    type: CLEAN_CITY_WEATHER
  }
}

export function addToDashBoard(cityObj) {
  return {
    type: ADD_TO_DASH_BOARD,
    payload: cityObj
  }
}

export function deleteFromDashBoard(cityObj) {
  return {
    type: DELETE_FROM_DASH_BOARD,
    payload: cityObj
  }
}

export function addToSelect(cityObj) {
  return {
    type: ADD_TO_SELECT,
    payload: cityObj
  }
}

export function setRageValue(value) {
  return {
    type: SET_RANGE_VALUE,
    payload: value
  }
}