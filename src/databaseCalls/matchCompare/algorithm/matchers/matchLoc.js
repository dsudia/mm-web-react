import { someMatch } from "../calculators";

export function matchLoc(memOneLoc, memTwoLoc) {
  if (someMatch(memOneLoc, memTwoLoc) === true) {
    return 1;
  } else {
    return 0;
  }
}
