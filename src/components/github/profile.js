import React from 'react';
import RepoList from './repo-list';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      avatar_url,
      public_repos,
      public_gists,
      followers,
      following,
      login,
      location,
      company,
			html_url
    } = this.props.githubData;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{name}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={avatar_url} className="thumbnail" style={{width: "100%"}}/>
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <span className="label label-primary">{public_repos} Repos</span>
                  <span className="label label-success">{public_gists} Public Gists</span>
                  <span className="label label-info">{followers} Followers</span>
                  <span className="label label-danger">{following} Following</span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-item"><strong>Username:</strong> {login}</li>
                    <li className="list-item"><strong>Location:</strong> {location}</li>
                    <li className="list-item"><strong>Company:</strong> {company}</li>
                  </ul>
                </div>
              </div>
							<br />
						<a className="btn btn-primary" target="_blank" href={html_url}>Visit Profile</a>
            </div>
          </div>

          <hr />
        <h3>User Repositories</h3>
          <RepoList {...this.props} />
        </div>
      </div>
    )
  }
}

export default Profile
