import React from 'react';

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
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search Github users</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    )
  }
}

export default Search;
