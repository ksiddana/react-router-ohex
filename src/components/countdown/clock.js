import React, { Component } from "react";
import "../../../style/countdown.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    const intervalId = setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  leadingZero(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000 * 3600) % 24);
    const days = Math.floor(time/(1000 * 3600 * 24));

    this.setState({days, hours, minutes, seconds});
  }

  render() {
    return (
      <div className="time">
        <div className="days">{this.leadingZero(this.state.days)} days</div>
        <div className="hours">{this.leadingZero(this.state.hours)} hours</div>
        <div className="minutes">{this.leadingZero(this.state.minutes)} minutes</div>
        <div className="seconds">{this.leadingZero(this.state.seconds)} seconds</div>
      </div>
    );
  }
}

export default Clock;
