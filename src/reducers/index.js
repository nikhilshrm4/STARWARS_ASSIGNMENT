import {
  FETCHING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  UPDATE_TEXT,
  UPDATE_PLANETS,
  SHOW_POPUP,
  HIDE_POPUP
} from "../actions";

const appStates = (
  state = {
    isFetching: false,
    isLoggedIn: false,
    user: "",
    searchCount: 0,
    txtValue: "",
    filteredPlanets: [],
    maxPopulation: 0,
    selectedPlanet: null
  },
  action
) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isFetching: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        user: action.username.toLowerCase()
      };
    case LOGOUT:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        user: "",
        txtValue: "",
        filteredPlanets: [],
        maxPopulation: 0,
        selectedPlanet: null
      };
    case UPDATE_TEXT:
      return {
        ...state,
        txtValue: action.string
      };
    case UPDATE_PLANETS:
      return {
        ...state,
        isFetching: false,
        filteredPlanets: action.planets,
        txtValue: action.string,
        maxPopulation: action.maxPopulation,
        searchCount: state.searchCount + 1
      };
    case SHOW_POPUP:
      return {
        ...state,
        selectedPlanet: action.selectedPlanet
      };
    case HIDE_POPUP:
      return {
        ...state,
        selectedPlanet: null
      };
    default:
      return state;
  }
};

export default appStates;
