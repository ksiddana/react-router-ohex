import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserData, getUserRepos, getUsers } from '../../actions';
import { bindActionCreators } from 'redux';
import Profile from './profile';
import Search from './search-user';
import NameList from './name-list';

const GITHUB_CLIENT_ID = "839d4cfb190361af424f";
const GITHUB_CLIENT_SECRET = "5aa7447b7e607dfd58f83735112e8eaa1071d214";

class Github extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.searchByName = this.searchByName.bind(this);
  }

  handleFormSubmit(username) {
    const { getUserData, getUserRepos } = this.props;
    getUserData(username);
    getUserRepos(username);
  }

  searchByName(name) {
    const { getUsers } = this.props;
    getUsers(name);
  }

  componentDidMount() {
    // this.getUserData();
  }

  render() {
    const { userData, userRepos, names } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Search
              title="Search Github users"
              onFormSubmit={this.handleFormSubmit}
            />
            <br />
            <Search
              title="Search Github users by name"
              onFormSubmit={this.searchByName}
            />
            <br />
            { userRepos.length && <Profile {...this.props}/> }
            { names.length && <NameList names={names}/> }
          </div>
        </div>
      </div>
    )
  }
}

Github.PropTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}

Github.defaultProps = {
  clientId: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET
}

const mapStateToProps = (state) => {
  return {
    userData: state.githubState.userData,
    userRepos: state.githubState.userRepos,
    names: state.githubState.names
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getUserData, getUserRepos, getUsers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Github);
