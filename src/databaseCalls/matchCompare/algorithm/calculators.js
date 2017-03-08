// does this teacher's choices match any of the school choices?
export function someMatch(memOneArr, memTwoArr) {
    const someMatch = memTwoArr.some(elOne => {
        for (let i = 0; i < memOneArr.length; i++) {
            if (elOne === memOneArr[i]) {
                return elOne === memOneArr[i];
            }
            continue;
        }
        return false;
    });
    return someMatch;
}

// how many?
export function countNumOfMatches(memOneArr, memTwoArr) {
    let countOfMatches = 0;
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
    traitsWgt,
    ed,
    edWgt
) {
    // individual scores
    const ageScore = ageWgt * age;
    const calScore = calWgt * cal;
    const locScore = locWgt * loc;
    const orgScore = orgWgt * org;
    const sizeScore = sizeWgt * size;
    const stateScore = stateWgt & state;
    const trainingScore = trainingWgt * training;
    const traitsScore = traitsWgt * traits;
    const edScore = edWgt * ed;

    // sub totals
    const score = ageScore +
        calScore +
        locScore +
        orgScore +
        sizeScore +
        stateScore +
        trainingScore +
        traitsScore +
        edScore;
    const divisor = ageWgt +
        calWgt +
        locWgt +
        orgWgt +
        sizeWgt +
        stateWgt +
        trainingWgt +
        traitsWgt +
        edWgt;

    return findDecimal(score, divisor);
}

export function matchPercentMutual(score1, score2) {
    return Math.sqrt(score1 * score2);
}
