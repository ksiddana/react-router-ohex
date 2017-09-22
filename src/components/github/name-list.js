import React from 'react';
import PropTypes from 'prop-types';

class NameList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { names } = this.props;
    return (
      <div>
        {
          names.map((name, index) => {
            return (
            <div className="panel panel-default" key={index}>
              <div className="panel-heading">
                <h3 className="panel-title">{name.login}</h3>
              </div>
              <div className="panel-body">
                <div className="row">

                  <div className="col-md-4">
                    <img src={name.avatar_url} className="img-thumbnail" style={{width: "50%"}}/>
                  </div>

                  <div className="col-md-8">
                    <ul className="list-group">
                      <div><li className="list-group-item"><strong>Username:</strong> {name.login}</li></div>
                      <div><li className="list-group-item"><strong>Location:</strong></li></div>
                      <div><li className="list-group-item"><strong>Company:</strong></li></div>
                      <div><a className="btn btn-primary" target="_blank" href={name.html_url}>Visit Profile</a></div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            )
          })
        }
      </div>
    );
  }
}

NameList.PropTypes = {
  title: PropTypes.string
}

NameList.defaultProps = {
  title: "title"
}

export default NameList;
