import axios from "axios"
import config from "../config"

const ADD_CITY = 'city/ADD_CITY';

const initialState = {

};

export const selectors = {
  getCities: (state) => state.cities,
  getCityById: (state, id) => state.cities.filter(city => city.id.toString()===id)[0]
};

export const fetchCity = (city) => {
  let request = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.APIKeys.openWeather}`);
  return dispatch => {
    request
      .then(
        ({data}) => {
          dispatch({ type: ADD_CITY, data });
        }
      )
      .catch((error)=>{
        console.error(`Something wrong during fetching the city: ${error}`);
      });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_CITY:
      const data = action.data;
      // We have to check if the city is already present in Redux
      let cityAlreadyPresent = false;
      if(state.length>0) {
        state.forEach(city => {
          if(city.name === data.name) {
            cityAlreadyPresent = true;
          }
        });
      }
      if(!cityAlreadyPresent) {
        return [...state, {name: data.name,
          temp: {
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
          },
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          coord: data.coord,
          id: data.id}];
      }
      return state;
    default:
      return state;
  }
}
