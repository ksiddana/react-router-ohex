import React from 'react';
import PropTypes from 'prop-types';

class NameList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { names } = this.props;
    return (
      <ul>
        {
          names.map((name, index) => {
            return <img src={name.avatar_url} className="thumbnail" style={{width: "100%"}}/>
          })
        }
      </ul>
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
