import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import moment from "moment";
import { addReminder, deleteReminder, clearReminders } from '../../actions';
import "../../../style/reminder-pro.css";

class ReminderPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: new Date()
    }

    console.log("this.state:", this.state);
  }

  addReminder() {
    console.log("this.state ", this.state);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    console.log("Deleting in application: ", id);
    console.log("this.props: ", this.props);
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}>&#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="reminder-pro">
        <div className="reminder-pro-title">
          Reminder Pro
        </div>

        <div className="form">

          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to ..."
              onChange={event => this.setState({text: event.target.value})}
            />
          </div>

          <input
            className="form-control"
            type="datetime-local"
            onChange={event => this.setState({dueDate: event.target.value})}
          />

          <button
            type="button"
            className="reminder-pro-button btn btn-success"
            onClick={() => this.addReminder()}>Add Reminder
          </button>
        </div>
        { this.renderReminders() }
        <div
          className="btn btn-danger"
          onClick={() => this.props.clearReminders()}
        >Clear Reminders
        </div>
      </div>
    );
  }
}

// Since we are creating only 1 method, we don't need bindActionCreators, its a shortcut that Redux provides
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder}, dispatch);
}*/

function mapStateToProps(state) {
  // console.log("State: ", state);
  return {
    reminders: state.reminders
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(ReminderPro);
