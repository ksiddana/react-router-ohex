import React from 'react';
import Repo from './repo';

class RepoList extends React.Component {
  constructor(props) {
    super(props);

    this.renderRepo = this.renderRepo.bind(this);
  }

  renderRepo() {
    if (this.props.userRepos.message !== 'Not Found' && this.props.userRepos) {
      return this.props.userRepos.map((repo, index) => {
        return (
          <div key={index}>
            <Repo repo={repo} />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.userRepos && this.renderRepo()}
      </ul>
    );
  }
}

RepoList.defaultProps = {
  userRepos: []
}

export default RepoList;
