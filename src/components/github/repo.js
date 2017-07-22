import React from 'react';

class Repo extends React.Component {
  constructor(props) {
    super(props);
    console.log("INSIDE REPO COMPONENT", this.props);
  }

  render() {
    console.log("INSIDE REPO COMPONENT", this.props);
    const {repo} = this.props.userRepos;

    return (
      <div>
        <li className="list-group-item">
          <div>Repo</div>
           {/* <a href={repo.html_url}> {repo.name}</a> : {repo.description} */}
        </li>
      </div>
    );
  }
};

export default Repo;
