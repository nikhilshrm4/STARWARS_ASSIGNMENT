import React from "react";
import { connect } from "react-redux";
import { closePopup } from "../../actions";
import "./index.css";

let DetailsPopup = ({ selectedPlanet: planet, dispatch }) => {
  return (
    <div className="popup-container">
      {planet && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => dispatch(closePopup())}>
              &times;
            </span>
            <div>
              <h4>{planet.name}</h4>
            </div>
            <div>
              <div>
                <label>rotation_period : </label>
                <label>{planet.rotation_period}</label>
              </div>
              <div>
                <label>orbital_period : </label>
                <label>{planet.orbital_period}</label>
              </div>
              <div>
                <label>diameter : </label>
                <label>{planet.diameter}</label>
              </div>
              <div>
                <label>climate : </label>
                <label>{planet.climate}</label>
              </div>
              <div>
                <label>gravity : </label>
                <label>{planet.gravity}</label>
              </div>
              <div>
                <label>terrain : </label>
                <label>{planet.terrain}</label>
              </div>
              <div>
                <label>surface_water : </label>
                <label>{planet.surface_water}</label>
              </div>
              <div>
                <label>population : </label>
                <label>{planet.population}</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect()(DetailsPopup);
