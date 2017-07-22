import React from 'react';
import Repo from './repo';

class RepoList extends React.Component {
  constructor(props) {
    super(props);

    this._renderRepos = this._renderRepos.bind(this);
  }

  _renderRepos() {
    const { userRepos } = this.props;

    if (userRepos) {
      userRepos.map(() => { return <p>Repo Item</p>} );
    } else {
      return <div>Repos are missing</div>
    }
  }

  render() {

    return (
      <div>
        <ul className="list-group">
          {this._renderRepos()}
          <Repo {...this.props}/>
        </ul>
      </div>
    );
  }

}

export default RepoList;
