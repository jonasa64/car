// Wherever you build your reducers
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import AppNavigation from '../Navigation/AppNavigation';
import thunk from 'redux-thunk';

import {Types} from "../constants/types"; //Import the actions types constant we defined in our actions


let dataState = { resCarList: [], loading:true };
//  calr list reducers
const carListReducer = (state = dataState, action) => {
    switch (action.type) {
        case Types.SET_CAR_LIST:
            state = Object.assign({}, state, { resCarList: action.resCarList, loading:false });
            return state;
        default:
            return state;
    }
};

//navigation reducers
const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navReducer
   ,carListReducer: carListReducer   
  })

  // return store
  return createStore(rootReducer, applyMiddleware(thunk));
}
