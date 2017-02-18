import { action, observable } from 'mobx'

export const initialState = observable({
  id: null,
  profile: {
    email: null,
    firstName: null,
    lastName: null,
    displayName: null,
    memberType: null
  },
  setId: action.bound(function _setCurrentUserId(id) {
    this.id = id
  }),
  setProfile: action.bound(function _setCurrentUserProfile(profile) {
    this.profile = profile
  })
})
