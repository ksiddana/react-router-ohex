import React from 'react';

class Repo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {repo} = this.props;
    
    return (
      <div key={repo.id}>
        <li className="list-group-item"><a href={repo.html_url}>{repo.name}</a> : {repo.description}</li>
      </div>
    );
  }
};

export default Repo;
