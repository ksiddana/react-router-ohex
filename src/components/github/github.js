import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserData } from '../../actions';
import { bindActionCreators } from 'redux';

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "ksiddana",
      userData: [],
      userRepo: [],
      perPage: 5
    }

    this.getUserData = this.getUserData.bind(this);
  }

  getUserData(url) {
    // this.props.getUserData(url)
    console.log("Step 4. Github Component Calling the getUserData Props method");
    this.props.getUserData(url);
  }

  /*getUserData() {
    $.ajax({
      url: 'http://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, error) {
        alert(error);
      }.bind(this)
    });
  }*/

  componentDidMount() {
    console.log("Step 3. Github React Component ComponentDidMount")
    const url = 'http://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret;
    this.getUserData(url);
  }

  render() {
    console.log("Step 2. Github React Component renderMethod Invoked", this.props);
    if (this.props.payload) {
      console.log("Inside Render Method, called 2wice:", this.props.payload);
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              Printing Location: {this.props.payload.avatar_url}
            </div>
          </div>
        </div>
      )
    } else {
      return (<div>GithubData missing</div>);
    }
  }
}

Github.PropTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}

Github.defaultProps = {
  clientId: '839d4cfb190361af424f',
  clientSecret: '5aa7447b7e607dfd58f83735112e8eaa1071d214'
}

const mapStateToProps = (state) => {
  console.log("Step 1. Checking for PROPS before rendering the Github React Component mapStateToProps: ", state);
  return {
    payload: state.githubData.payload
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getUserData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Github);
