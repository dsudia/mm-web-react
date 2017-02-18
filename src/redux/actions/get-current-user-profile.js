import actionTypes from "../constants/action-types";
import firebase from "firebase";

export function getCurrentUserProfile(userId) {
  return dispatch => {
    dispatch(getCurrentUserProfileRequestedAction());
    return firebase
      .database()
      .ref(`/${process.env.NODE_ENV}/users/profiles/${userId}`)
      .once("value")
      .then(data => {
        const profile = data.val();
        dispatch(getCurrentUserProfileFulfilledAction(profile));
      })
      .catch(err => {
        console.log(err);
        dispatch(getCurrentUserProfileRejectedAction());
      });
  };
}

function getCurrentUserProfileRequestedAction() {
  return {
    type: actionTypes.GET_CURRENT_USER_PROFILE_REQUESTED
  };
}

function getCurrentUserProfileRejectedAction() {
  return {
    type: actionTypes.GET_CURRENT_USER_PROFILE_REJECTED
  };
}

function getCurrentUserProfileFulfilledAction(currentUserProfile) {
  return {
    type: actionTypes.GET_CURRENT_USER_PROFILE_FULFILLED,
    currentUserProfile
  };
}
