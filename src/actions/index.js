import axios from "axios";
import { NotificationManager } from "react-notifications";
import debounce from "lodash/debounce";

export const FETCHING = "FETCHING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const UPDATE_TEXT = "UPDATE_TEXT";
export const UPDATE_PLANETS = "UPDATE_PLANETS";
export const SHOW_POPUP = "SHOW_POPUP";
export const HIDE_POPUP = "HIDE_POPUP";

export const fetching = () => ({
  type: FETCHING
});

export const logIn = ({ username, password, history }) => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(fetching());
    return axios
      .get("https://swapi.co/api/people")
      .then(({ data }) => {
        const user = data.results.filter(function(person) {
          return person.name.toLowerCase().match(username.toLowerCase());
        });
        if (user.length > 0 && user[0].birth_year === password) {
          dispatch(logInSuccess(username));
          history.push("/home");
        } else {
          dispatch(logInError());
          NotificationManager.error("Invalid Credentials", "Error", 5000);
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(logInError());
        NotificationManager.error("Network Error", "Error", 5000);
      });
  });

export const logOut = () => ({
  type: LOGOUT
});

export const logInSuccess = username => ({
  type: LOGIN_SUCCESS,
  username
});

export const updateText = string => ({
  type: UPDATE_TEXT,
  string
});

export const updatePlanets = (planets, string, maxPopulation) => ({
  type: UPDATE_PLANETS,
  planets,
  string,
  maxPopulation
});

export const logInError = () => ({
  type: LOGIN_ERROR
});

export const showPopup = selectedPlanet => ({
  type: SHOW_POPUP,
  selectedPlanet
});

export const closePopup = () => ({
  type: HIDE_POPUP
});

export const filterList = string => dispatch => {
  dispatch(fetching());
  return axios
    .get(`https://swapi.co/api/planets/?search=${string}`)
    .then(({ data }) => {
      dispatch(updatePlanets(data.results, string));
    })
    .catch(error => {
      console.log(error);
      dispatch(logInError());
      NotificationManager.error("Network Error", "Error", 5000);
    });
};

const searchPlanets = (string, dispatch) => {
  dispatch(filterList(string));
};

export const throttledSearch = debounce(searchPlanets, 1000);
