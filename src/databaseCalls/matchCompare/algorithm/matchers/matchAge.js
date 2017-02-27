import { someMatch, countNumOfMatches, findDecimal } from "../calculators";

export function matchAge(memOneAge, memTwoAge) {
  if (someMatch(memOneAge, memTwoAge) === true) {
    var count = countNumOfMatches(memOneAge, memTwoAge);
    return findDecimal(count, memOneAge.length);
  } else {
    return -1;
  }
}
