import React, { Component } from 'react';
import fetchJSONP from 'fetch-jsonp';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as actions from '../actions';

/*const dbStore = (state = {}, action) => {

  console.log("Current state of the DB Component:", state);
  console.log("Current Action of the DB Component: ", action);

  switch(action.type) {
    case "FOOD_ITEMS":
      return state;
      // return {...state, payload: action.payload };
    default:
      return state;
  }
};*/

/*const queryAllDBValues = () => {
  return (dispatch) => {
    return fetchJSONP('/database').then((allData) => {
      console.log("All FOOD ITEMS:", allData);
      dispatch({
        type:"FOOD_ITEMS",
        payload: allData
      });
    });
  };
};*/

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// Building the actual store that we will use
// const store = createStoreWithMiddleware(dbStore);

class FoodItems extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS inside FoodItems Component Constructor", props);
    this.state = {
      foodItems: [
        {
          name: 'Food Item 1',
          item_desc: 'food description 1'
        },
        {
          name: 'Food Item 2',
          item_desc: 'food description 2'
        },
      ]
    }
  }

  componentDidMount() {
    // this.props.setAgeRange();
    // this.props.setYearsActiveRange();
    // this.props.fetchFoodItems();
  }

  renderFoodItems(item) {
    return (
      <div key={item.name}>
        <p>{item.name}</p>
      </div>
    );
  }

  render() {
    console.log("PROPS inside FoodItems Component", this.props);
    return (
      <div>
        <p>Pull Food Items Data from Database</p>
        <button onClick={ () => this.props.fetchFoodItems() }>Search Food Items</button>
        {
        this.props.foodItems.map(item => {
          return (
            <div key={item.item_name}>
              <p>Menu Item: {item.item_name}</p>
              <p>Min Price: {item.min_price}</p>
              <p>Standard Price: {item.std_price}</p>
              <p>Description: {item.item_desc}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = ((state) => {
  console.log("STATE Parameter from the mapStateToProps", state);
  return {
    foodItems: state.foodData.foodItems
  };
});

export default connect(mapStateToProps, actions)(FoodItems);

/*const ConnectedDatabase = connect(null,null)(Database);

export class DatabaseStore extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedDatabase />
      </Provider>
    );
  }
}*/
