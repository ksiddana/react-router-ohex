import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { addReminder, deleteReminder } from '../../actions';
import "../../../style/reminder-pro.css";

class ReminderPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  addReminder() {
    console.log("this.state ", this.state);
    this.props.addReminder(this.state.text);
  }

  deleteReminder(id) {
    console.log("Deleting in application: ", id);
    console.log("this.props: ", this.props);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
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

        <div className="form-inline">

          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to ..."
              onChange={event => this.setState({text: event.target.value})}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}>Add Reminder
          </button>
        </div>

        { this.renderReminders() }
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

export default connect(mapStateToProps, { addReminder, deleteReminder })(ReminderPro);
