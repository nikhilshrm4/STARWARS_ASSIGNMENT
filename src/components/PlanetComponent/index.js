import React from "react";
import { connect } from "react-redux";
import { showPopup } from "../../actions";
import "./index.css";

const Planet = ({ planet, dispatch }) => (
  <div className="planet-box" onClick={() => dispatch(showPopup(planet))}>
    <div>
      <label>Planet Name : </label>
      <label>{planet.name}</label>
    </div>
    <div>
      <label>Population : </label>
      <label>{planet.population}</label>
    </div>
    <div>
      <label>diameter : </label>
      <label>{planet.diameter}</label>
    </div>
  </div>
);

export default connect()(Planet);
