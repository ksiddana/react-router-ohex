import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignIn from "./sign-in";
// import SignOut from "./sign-out";

class GoalCoach extends Component {

  constructor(props){
    super(props);
  };

  render() {

    return(
      <div>
        <SignIn />
      </div>
    )
  }
}

export default GoalCoach;

/*
Not completed this React App for Goal Coach because of Firebase Database
I'll come back to firebase later
*/
