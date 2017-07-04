import React, { Component } from "react";
import Clock from "./clock.js";
import "../../../style/countdown.css";
import { Form, FormControl, Button } from "react-bootstrap";

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
        deadline: "December 25, 2017",
        newDeadline: ""
    }
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline })
  }

  render () {
    return(
      <div className="countdown">
        <div className="title">
          Countdown to {this.state.deadline}
        </div>

        <Clock
          deadline={this.state.deadline}
        />

        <Form inline>
          <FormControl
            className="deadline-input"
            placeholder="new date"
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>

      </div>
    );
  }
};

export default Countdown;
