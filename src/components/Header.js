import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
const db = require('../../database/queries/db');

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { id: null };
  }

  componentWillMount() {
    this.setLink();
  }

  setLink() {
    const index = _.random(0, db.length);
    this.setState({ id: index });
  }

  render() {
    // <li><Link to={`/artists/${this.state.id}`} onClick={this.setLink.bind(this)}>Random Artist</Link></li>
    // <li><Link to={'/artists/new'}>Create Artist</Link></li>
    return (
      <div className="row">
        <h1 className="title">OH Exchange</h1>
          <ul className="header">
            <li><IndexLink to="/" activeClassName="active">OHEX</IndexLink></li>
            <li><Link to="/database" activeClassName="active">Database</Link></li>
            <li><Link to="/hello" activeClassName="active">Google Maps</Link></li>
            </ul>
        <div className="content">
        {this.props.children}
        </div>
      </div>
    );
  }
};

export default Header;
