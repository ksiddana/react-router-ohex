import React from 'react';

class Repo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("INSIDE REPO COMPONENT", this.props);
    const {repo} = this.props;
    console.log("INSIDE REPO COMPONENT", repo);
    return (
      <div key={repo.id}>
        <li className="list-group-item"><a href={repo.html_url}>{repo.name}</a> : {repo.description}</li>
      </div>
    );
  }
};

export default Repo;
