import { matchState } from './matchers/matchState'
import { matchAge } from './matchers/matchAge';
import { matchTraining } from './matchers/matchTraining'
import { matchCal } from './matchers/matchCal'
import { matchLoc } from './matchers/matchLoc'
import { matchOrg } from './matchers/matchOrg'
import { matchSize } from './matchers/matchSize'
import { matchTraits } from './matchers/matchTraits'
import { matchPercentOneWay, matchPercentMutual } from './calculators'

export function match(memberOne, memberTwo) {
    let memOne;
    let memTwo;
    if (memberOne.isTeacher === true) {
        memOne = memberOne;
        memTwo = memberTwo;
    } else if (memberOne.isTeacher === false) {
        memOne = memberTwo;
        memTwo = memberOne;
    }

    // establish all match percentages for individual elements
    // if a non-negotiable element is -1, stop the loop and return a non-match
    const ageMatch = matchAge(memTwo.ageRanges, memOne.ageRanges);
    if (ageMatch === (-1)) {
        return 0;
    }

    const stateMatch = matchState(memTwo.states, memOne.states);
    if (stateMatch === (-1)) {
        return 0;
    }

    const trainingMatch = matchTraining(memOne.training, memTwo.training);
    if (trainingMatch === (-1)) {
        return 0;
    }

    const traitMatch = matchTraits(memOne.traits, memTwo.traits);
    const calMatch = matchCal(memTwo.cals, memOne.cals);
    const locMatch = matchLoc(memTwo.locTypes, memOne.locTypes);
    const orgMatch = matchOrg(memTwo.orgTypes, memOne.orgTypes);
    const sizeMatch = matchSize(memTwo.sizes, memOne.sizes);

    const matchPercentMemOne = matchPercentOneWay(ageMatch, memOne.ageRangesWgt, calMatch, memOne.calsWgt, locMatch, memOne.locTypesWgt, orgMatch, memOne.orgTypesWgt, sizeMatch, memOne.sizesWgt, stateMatch, memOne.statesWgt, trainingMatch, memOne.trainingWgt, traitMatch, memOne.traitsWgt);

    const matchPercentMemTwo = matchPercentOneWay(ageMatch, memTwo.ageRangesWgt, calMatch, memTwo.calsWgt, locMatch, memTwo.locTypesWgt, orgMatch, memTwo.orgTypesWgt, sizeMatch, memTwo.sizesWgt, stateMatch, memTwo.statesWgt, trainingMatch, memTwo.trainingWgt, traitMatch, memTwo.traitsWgt);

    const matchPercent = matchPercentMutual(matchPercentMemOne, matchPercentMemTwo).toFixed(2);

    return matchPercent;
}
