import { action, observable } from "mobx";

export const initialState = observable({
  id: null,
  profile: null,
  matchingProfile: null,
  updateMatchingProfile: action.bound(function _updateMatchingProfile(
    newProps
  ) {
    const newProfile = Object.assign({}, this.matchingProfile || {}, newProps);
    this.matchingProfile = newProfile;
  }),
  setId: action.bound(function _setCurrentUserId(id) {
    this.id = id;
  }),
  setProfile: action.bound(function _setCurrentUserProfile(profile) {
    this.profile = profile;
  }),
  clearUser: action.bound(function _clearUser() {
    this.id = null;
    this.profile = null;
  })
});
