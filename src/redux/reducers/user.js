export function currentUserReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_CURRENT_USER_FULFILLED':
      return Object.assign({}, state, {
        currentUser: action.currentUser
      })
    case 'GET_CURRENT_USER_PROFILE_FULFILLED':
    console.log(action)
      return Object.assign({}, state, {
        currentUserProfile: action.currentUserProfile
      })
    default:
      return state;
  }
}
