import firebase from "firebase";

export function writeInitialData(
    userId,
    firstName,
    lastName,
    displayName,
    memberType,
    env = process.env.NODE_ENV
) {
    return firebase.database().ref(`${env}/users/profiles/${userId}`).set({
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

export function getMatchProfiles(
    userId,
    memberType,
    env = process.env.NODE_ENV
) {
    return firebase
        .database()
        .ref(`/${env}/matchingProfiles/${memberType}/${userId}`)
        .once("value");
}

export function writeMatchProfile(
    userId,
    matchProfile,
    memberType,
    uid,
    env = process.env.NODE_ENV
) {
    return firebase
        .database()
        .ref(`${env}/matchingProfiles/${memberType}/${userId}/${uid}`)
        .set(matchProfile);
}

export function getPotentialMatches(userId, uuid, env = process.env.NODE_ENV) {
    return firebase
        .database()
        .ref(`${env}/potentialMatches/${userId}/${uuid}`)
        .once("value");
}

export function getUserNameFromId(userId, env = process.env.NODE_ENV) {
    return firebase
        .database()
        .ref(`${env}/users/profiles/${userId}`)
        .once("value")
        .then(data => {
            const value = data.val();
            return value.displayName;
        });
}
