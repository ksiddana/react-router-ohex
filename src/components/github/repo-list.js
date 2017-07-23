import React from 'react';
import Repo from './repo';

class RepoList extends React.Component {
  constructor(props) {
    super(props);

    this.renderRepo = this.renderRepo.bind(this);
  }

  renderRepo() {
    console.log("INSIDE renderRepoMethod KARUN");
    if (this.props.userRepos) {
      console.log("INSIDE renderRepoMethod if Condition KARUNNEHA", this.props);
      return this.props.userRepos.map(repo => { return <Repo repo={repo} /> });
    }
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {
            this.props.userRepos && this.props.userRepos.map(repo => {
              return (
                <div key={repo.id}><li className="list-group-item"><a href={repo.html_url}>{repo.name}</a> : {repo.description}</li></div>
              );
            })
          }
        </ul>
        <ul className="list-group">
          <div>
            {this.props.userRepos && this.props.userRepos.map(repo => { return <Repo repo={repo} /> }) }
          </div>
        </ul>
        <ul className="list-group">
          {this.props.userRepos && this.renderRepo()}
        </ul>
      </div>
    );
  }
}

RepoList.defaultProps = {}

export default RepoList;
