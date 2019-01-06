import React, { Component } from "react";
import Loader from "react-loader";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logIn, logOut } from "../../actions";
import { loaderOptions } from "../../constants";
import "./index.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(logOut());
  }
  updateFields = (e, field) => {
    this.setState({
      [field]: e.target.value
    });
  };
  manageLogin = e => {
    const { dispatch, history } = this.props;
    const { username, password } = this.state;
    e.preventDefault();

    dispatch(logIn({ username, password, history }));
  };
  render() {
    const { isFetching } = this.props;
    const { username, password } = this.state;
    return (
      <div className="container-fluid">
        <div className="login-container-fixed">
          <i className="logo-star-wars" />
          <div className="login-heading">Sign In to enter the Galaxy</div>
          <form onSubmit={this.manageLogin}>
            <div className="input-group form-control">
              <input
                type="text"
                required
                onChange={e => this.updateFields(e, "username")}
              />
              <label className="input-group-addon label-txt" />
              <label className="label-txt">Enter Username</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                required
                onChange={e => this.updateFields(e, "password")}
              />
              <label className="input-group-addon label-txt" />
              <label className="label-txt">Enter Password</label>
            </div>
            <div className="text-center">
              <input
                type="submit"
                className="btn-blue"
                value="Continue"
                disabled={!(username && password)}
              />
            </div>
          </form>
        </div>
        <Loader
          loaded={!isFetching}
          options={loaderOptions}
          className="spinner"
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { isFetching } = state;
  return {
    isFetching
  };
};
export default withRouter(connect(mapStateToProps)(LoginPage));
