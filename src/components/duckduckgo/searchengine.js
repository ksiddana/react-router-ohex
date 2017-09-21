import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Result from "./result";
import { onSubmit } from "../../reducers/duckduckgo/duckduckgo.actions";

class SearchEngine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("this.state", this.state.text);
    this.props.onSubmit(this.state.text);
  }

  handleChange(ev) {
    this.setState({
      text: ev.target.value
    })
  }


  render() {
    // const { duckduckgo } = this.props
    const { text } = this.state;
    return (
      <div className="container">
        <form className="well" onSubmit={this.onSubmit.bind(this)}>
          <label>Search something ...</label>
          <input
            type="text"
            className="form-control"
            value={this.state.text}
            onChange={(ev) => this.handleChange(ev)}
          />
        </form>

        <div>
          {text ? <h2 className="page-header">Results</h2> : ""}
          {
            this.props.duckduckgo.results.map((result, index) => {
              return (
                <Result result={result} key={index} />
              );
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(state => ({
duckduckgo: state.duckduckgo
}), { onSubmit })(SearchEngine);
