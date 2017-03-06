import { action, observable } from "mobx";

export const initialState = observable({
  signInIsOpen: false,
  closeSignIn: action.bound(function _closeSignIn() {
    this.signInIsOpen = false;
  }),
  openSignIn: action.bound(function _openSignIn() {
    this.signInIsOpen = true;
  }),
  registerIsOpen: false,
  closeRegister: action.bound(function _closeRegister() {
    this.registerIsOpen = false;
  }),
  openRegister: action.bound(function _openRegister() {
    this.registerIsOpen = true;
  }),
  matchProfContIsOpen: false,
  closeMatchProfCont: action.bound(function _closeFillMatchProfile() {
    this.matchProfContIsOpen = false;
  }),
  openMatchProfCont: action.bound(function _openFillMatchProfile() {
    this.matchProfContIsOpen = true;
  })
});
