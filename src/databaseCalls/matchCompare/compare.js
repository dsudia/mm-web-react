import { match } from "./algorithm/algorithm";
import firebase from "firebase";
import Promise from "bluebird";

export function runMatchComparison(uid, memberType, env = process.env.NODE_ENV) {
  let allUsers = [];
  let currentId = "";
  let matchPercent = 0;
  let userProfile;

  let oppositeType;
  if (memberType === "teacher") {
    oppositeType = "school";
  } else {
    oppositeType = "teacher";
  };

  return Promise.all([firebase.database().ref(`${env}matchingProfiles/${oppositeType}`).once("value"), firebase.database().ref(`${env}/potentialMatches/${memberType}/${uid}`)])
}

// Run matches
router.post("/notify", (req, res, next) => {
  const userEmail = req.body.email;
  const update = req.body.update;
  let allUsers = [];
  console.log(userEmail);
  if (userEmail === undefined || update === undefined) {
    res.status(400).json({
      status: 400,
      message: "Please provide an email string and an update boolean"
    });
  }
  // run matching algorithm if update is true
  if (update === true) {
    let currentEmail = "";
    let matchPercent = 0;
    let userProfile;
    db.potentialMatches
      .findOne({
        email: userEmail
      })
      .then(profile => {
        if (profile === null) {
          throw err;
        }
        userProfile = profile;
        return db.potentialMatches.find().toArray().then(docs => {
          allUsers = docs;
          return allUsers.forEach((currentProfile, ind, arr) => {
            if (
              currentProfile.active === true &&
                currentProfile.email !== userEmail
            ) {
              if (
                userProfile.isTeacher === true &&
                  currentProfile.isTeacher === false ||
                  userProfile.isTeacher === false &&
                    currentProfile.isTeacher === true
              ) {
                try {
                  matchPercent = Number(
                    matchAlgorithm(userProfile, currentProfile)
                  );
                } catch (err) {
                  console.log(err);
                }
                if (matchPercent >= config.cutoff) {
                  var promises = [];
                  promises.push(
                    db.potentialMatches.findAndModify({
                      query: {
                        email: userEmail
                      },
                      update: {
                        $addToSet: {
                          matchSuggestions: {
                            email: currentProfile.email,
                            perc: matchPercent
                          }
                        }
                      },
                      new: true
                    })
                  );
                  promises.push(
                    db.potentialMatches.findAndModify({
                      query: {
                        email: currentProfile.email
                      },
                      update: {
                        $addToSet: {
                          matchSuggestions: {
                            email: userEmail,
                            perc: matchPercent
                          }
                        }
                      },
                      new: true
                    })
                  );
                  return Promise.all(promises);
                }
              }
            }
          });
        });
      })
      .then(() => {
        res.status(200).json({
          status: 200,
          message: "Match suggestions updated for " + userEmail
        });
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          message: "Email does not match any profiles"
        });
      });
  } else {
    // remove deactivated users from all match arrays if update is false
    return db.potentialMatches
      .update(
        {},
        {
          $pull: {
            matchSuggestions: {
              email: userEmail,
              perc: {
                $gt: 0
              }
            }
          }
        },
        {
          multi: true
        }
      )
      .then(() => {
        res.status(200).json({
          status: 200,
          message: userEmail + " removed from matchSuggestions"
        });
      });
  }
});

module.exports = router;
