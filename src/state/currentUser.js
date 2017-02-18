import { action, observable } from 'mobx'

export const initialState = observable({
  id: null,
  profile: null,
  setId: action.bound(function _setCurrentUserId(id) {
    this.id = id
  }),
  setProfile: action.bound(function _setCurrentUserProfile(profile) {
    this.profile = profile
  }),
  clearUser: action.bound(function _clearUser() {
    this.id = null
    this.profile = null
  })
})
