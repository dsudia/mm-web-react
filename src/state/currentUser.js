import { action, observable } from "mobx";

export const initialState = observable({
  id: null,
  profile: {},
  matchingProfile: {
    states: []
  },
  updateMatchingProfile: action.bound(function _updateMatchingProfile(
    newProps
  ) {
    const newProfile = Object.assign({}, this.matchingProfile || {}, newProps);
    this.matchingProfile = newProfile;
  }),
  pushToMatchProfileArray: action.bound(function _pushToMatchProfileArray(
    name,
    value
  ) {
    this.matchingProfile[name].push(value);
  }),
  removeFromMatchProfileArray: action.bound(
    function _removeFromMatchProfileArray(name, value) {
      const newValues = this.matchingProfile[name].filter(el => {
        if (el !== value) {
          return el;
        }
        return null;
      });
      this.matchingProfile[name] = newValues;
    }
  ),
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
