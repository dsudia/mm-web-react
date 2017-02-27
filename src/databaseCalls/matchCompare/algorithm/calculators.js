// does this teacher's choices match any of the school choices?
export function someMatch(memOneArr, memTwoArr) {
  var someMatch = memTwoArr.some(elOne => {
    for (i = 0; i < memOneArr.length; i++) {
      if (elOne === memOneArr[i]) {
        return elOne === memOneArr[i];
      } else {
        continue;
      }
    }
  });
  return someMatch;
}

// how many?
export function countNumOfMatches(memOneArr, memTwoArr) {
  var countOfMatches = 0;
  memTwoArr.forEach(elOne => {
    return memOneArr.forEach(elTwo => {
      if (elOne === elTwo) {
        countOfMatches += 1;
      }
    });
  });
  return countOfMatches;
}

// divide number of matches by number of school grade bands
export function findDecimal(divisor, dividend) {
  return divisor / dividend;
}

// calculate match percent
export function matchPercentOneWay(
  age,
  ageWgt,
  cal,
  calWgt,
  loc,
  locWgt,
  org,
  orgWgt,
  size,
  sizeWgt,
  state,
  stateWgt,
  training,
  trainingWgt,
  traits,
  traitsWgt
) {
  // individual scores
  var ageScore = ageWgt * age;
  var calScore = calWgt * cal;
  var locScore = locWgt * loc;
  var orgScore = orgWgt * org;
  var sizeScore = sizeWgt * size;
  var stateScore = stateWgt & state;
  var trainingScore = trainingWgt * training;
  var traitsScore = traitsWgt * traits;

  // sub totals
  var score = ageScore +
    calScore +
    locScore +
    orgScore +
    sizeScore +
    stateScore +
    trainingScore +
    traitsScore;
  var divisor = ageWgt +
    calWgt +
    locWgt +
    orgWgt +
    sizeWgt +
    stateWgt +
    trainingWgt +
    traitsWgt;

  return this.findDecimal(score, divisor);
}

export function matchPercentMutual(score1, score2) {
  return Math.sqrt(score1 * score2);
}
