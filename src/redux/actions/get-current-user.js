import actionTypes from "../constants/action-types";
import firebase from "firebase";

export function getCurrentUser() {
  return dispatch => {
    dispatch(getCurrentUserRequestedAction());
    const user = firebase.auth().currentUser;
    if (user) {
      dispatch(getCurrentUserFulfilledAction(user));
    } else {
      dispatch(getCurrentUserRejectedAction());
    }
  };
}

function getCurrentUserRequestedAction() {
  return {
    type: actionTypes.GET_CURRENT_USER_REQUESTED
  };
}

function getCurrentUserRejectedAction() {
  return {
    type: actionTypes.GET_CURRENT_USER_REJECTED
  };
}

function getCurrentUserFulfilledAction(user) {
  return {
    type: actionTypes.GET_CURRENT_USER_FULFILLED,
    user
  };
}
