import { match } from "./algorithm/algorithm";
import firebase from "firebase";
import Promise from "bluebird";

export function runMatchComparison(
  userId,
  memberType,
  env = process.env.NODE_ENV
) {
  let allUsers = [];
  let matchPercent = 0;
  let userProfile;

  let oppositeType;
  if (memberType === "teacher") {
    oppositeType = "school";
  } else {
    oppositeType = "teacher";
  }

  return Promise.all([
    firebase
      .database()
      .ref(`${env}/matchingProfiles/${oppositeType}`)
      .once("value"),
    firebase
      .database()
      .ref(`${env}/matchingProfiles/${memberType}/${userId}`)
      .once("value")
  ]).spread((oppositeUsers, currentUser) => {
    userProfile = currentUser.val();
    allUsers = oppositeUsers.val();
    userProfile = Object.keys(userProfile).map(key => {
      return {
        profileId: key,
        matchingProfile: userProfile[key]
      };
    })[0];
    allUsers = Object.keys(allUsers).map(id => {
      return {
        userId: id,
        matchingProfiles: Object.keys(allUsers[id]).map((profId, index) => {
          return {
            profId: profId,
            matchingProfile: allUsers[id][profId]
          };
        })
      };
    });
    return allUsers.forEach((user, index, array) => {
      return user.matchingProfiles.forEach((currentProfile, ind, arr) => {
        try {
          matchPercent = Number(
            match(userProfile.matchingProfile, currentProfile.matchingProfile)
          ) *
            100;
        } catch (err) {
          console.log(err);
        }
        const thisUserObj = {
          userId,
          profileId: userProfile.profileId,
          matchPercent
        };
        const currentProfileObj = {
          userId: user.userId,
          profileId: currentProfile.profId,
          matchPercent
        };
        let thisUserPotentialMatches;
        let currentProfilePotentialMatches;
        return Promise.all([
          firebase
            .database()
            .ref(`${env}/potentialMatches/${userId}/${userProfile.profileId}`)
            .once("value", snapshot => {
              const exists = snapshot.val() !== null;
              if (!exists) {
                return null;
              }
              thisUserPotentialMatches = snapshot.val();
            }),
          firebase
            .database()
            .ref(
              `${env}/potentialMatches/${user.userId}/${currentProfile.profId}`
            )
            .once("value", snapshot => {
              const exists = snapshot.val() !== null;
              if (!exists) {
                return null;
              }
              currentProfilePotentialMatches = snapshot.val();
            })
        ]).then(() => {
          console.log(thisUserPotentialMatches);
          console.log(currentProfilePotentialMatches);
          if (thisUserPotentialMatches) {
            thisUserPotentialMatches = Object.keys(
              thisUserPotentialMatches
            ).map(el => el);
            thisUserPotentialMatches = thisUserPotentialMatches.filter(el => {
              return el.userId !== userId &&
                el.profileId !== currentProfile.profId &&
                el.matchPercent !== matchPercent;
            });
          }
          if (currentProfilePotentialMatches) {
            currentProfilePotentialMatches = Object.keys(
              currentProfilePotentialMatches
            ).map(el => el);
            currentProfilePotentialMatches = currentProfilePotentialMatches.filter(
              el => {
                return el.userId !== user.userId &&
                  el.profileId !== userProfile.profileId &&
                  el.matchPercent !== matchPercent;
              }
            );
          }
          console.log(matchPercent);
          if (matchPercent >= 80) {
            if (
              !thisUserPotentialMatches ||
                (thisUserPotentialMatches && !thisUserPotentialMatches.length > 0)
            ) {
              // write to this profile's potential matches
              const userRef = firebase
                .database()
                .ref(
                  `${env}/potentialMatches/${userId}/${userProfile.profileId}`
                );
              const userPotentialMatchRef = userRef.push();
              userPotentialMatchRef.set(currentProfileObj);
            }
            if (
              !currentProfilePotentialMatches ||
                (currentProfilePotentialMatches &&
                  !currentProfilePotentialMatches.length > 0)
            ) {
              // write to the currentProfile's potential matches
              const currentRef = firebase
                .database()
                .ref(
                  `${env}/potentialMatches/${user.userId}/${currentProfile.profId}`
                );
              const currentPotentialMatchRef = currentRef.push();
              currentPotentialMatchRef.set(thisUserObj);
            }
          }
        });
      });
    });
  });
}
