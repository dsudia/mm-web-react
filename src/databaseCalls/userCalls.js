import firebase from "firebase";

export function writeInitialData(
  userId,
  firstName,
  lastName,
  displayName,
  memberType,
  env = process.env.NODE_ENV
) {
  firebase.database().ref(`${env}/users/profiles/${userId}`).set({
    firstName: firstName,
    lastName: lastName,
    displayName: displayName,
    memberType: memberType
  });
}

export function getProfileData(userId, env = process.env.NODE_ENV) {
  return firebase
    .database()
    .ref(`/${env}/users/profiles/${userId}`)
    .once("value");
}

export function getMatchProfile(userId, memberType, env = process.env.NODE_ENV) {
  return firebase
    .database()
    .ref(`/${env}/users/matchingProfiles/${memberType}/${userId}`)
    .once("value");
}

export function writeMatchProfile(
  userId,
  matchProfile,
  memberType,
  env = process.env.NODE_ENV
) {
  firebase
    .database()
    .ref(`${env}/users/matchingProfiles/${memberType}/${userId}`)
    .set(matchProfile);
}
