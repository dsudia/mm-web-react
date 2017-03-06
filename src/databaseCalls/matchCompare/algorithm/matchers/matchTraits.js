import { someMatch, countNumOfMatches, findDecimal } from "../calculators";

export function matchTraits(memOneTraits, memTwoTraits) {
    if (someMatch(memOneTraits, memTwoTraits) === true) {
        const count = countNumOfMatches(memOneTraits, memTwoTraits);
        return findDecimal(count, memOneTraits.length);
    } else {
        return (0);
    }
};
