import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.value.trim();
    if (!username) {
      console.log("Error on Username");
    }

    this.props.onFormSubmit(username);
    this.refs.username.value = "";
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>{title}</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  title: PropTypes.string
}

Search.defaultProps = {
  title: "Title"
}

export default Search;
