import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserData, getUserRepos } from '../../actions';
import { bindActionCreators } from 'redux';
import Profile from './profile';
import Search from './search-user';

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
    this.getUserRepos = this.getUserRepos.bind(this);
  }

  getUserData() {
    console.log("Step 4. Github Component Calling the getUserData Props method");
    const url = 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret;
    this.props.getUserData(url);
  }

  getUserRepos() {
    const url = 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + 'client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created';
    this.props.getUserRepos(url);
  }

  handleFormSubmit(username) {
    this.setState({username: username}, function() {
      this.getUserData();
      // this.getUserRepos();
    });
  }

  componentDidMount() {
    console.log("Step 3. Github React Component ComponentDidMount")
    this.getUserData();
    // this.getUserRepos();
  }

  render() {
    const { githubData } = this.props;
    console.log("Step 2 & 9. Github React Component renderMethod Invoked", this.props);
    if (this.props.githubData) {
      console.log("Step 10. Inside Render Method, with Data:", this.props.githubData);
      console.log("\n\n------- END ---------\n\n");
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
              <Profile {...this.props}/>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div>Loading Data ... or could not receive data</div>);
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
  // You can deconstruct the state here
  console.log("\n\n--------- START -----------\n\n");
  console.log("Step 1 & 8. Github React Component mapStateToProps: ", state);
  return {
    githubData: state.githubState.githubData,
    userRepos: state.githubState.userRepos
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getUserData, getUserRepos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Github);
