import React from "react";
import Loader from "react-loader";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchBox from "../../components/SearchBox";
import PlanetComponent from "../../components/PlanetComponent";
import DetailsPopup from "../../components/DetailsPopup";
import { updateText, throttledSearch, logOut } from "../../actions";
import { loaderOptions } from "../../constants";

import "./index.css";

const HomePage = ({
  dispatch,
  filteredPlanets,
  searchCount,
  txtValue,
  isFetching,
  selectedPlanet
}) => (
  <div className="home-page">
    <div className="align-right">
      <input
        type="submit"
        className="btn-blue"
        value="Logout"
        onClick={() => dispatch(logOut())}
      />
    </div>
    <div className="home-page-wrapper">
      <SearchBox
        searchFun={e => {
          dispatch(updateText(e.target.value));
          throttledSearch(e.target.value, dispatch);
        }}
        txtValue={txtValue}
      />
      {filteredPlanets.map(planet => (
        <PlanetComponent key={planet.name} planet={planet} />
      ))}
      {searchCount !== 0 && filteredPlanets.length === 0 ? (
        <div>No Planets Found</div>
      ) : (
        <span>
          {filteredPlanets.length !== 0
            ? filteredPlanets.length + " results"
            : null}
        </span>
      )}
    </div>
    <DetailsPopup selectedPlanet={selectedPlanet} />
    <Loader loaded={!isFetching} options={loaderOptions} className="spinner" />
  </div>
);

const mapStateToProps = state => {
  const {
    user,
    filteredPlanets,
    txtValue,
    searchCount,
    maxPopulation,
    isFetching,
    selectedPlanet
  } = state;
  return {
    user,
    filteredPlanets,
    txtValue,
    searchCount,
    maxPopulation,
    isFetching,
    selectedPlanet
  };
};
export default withRouter(connect(mapStateToProps)(HomePage));
