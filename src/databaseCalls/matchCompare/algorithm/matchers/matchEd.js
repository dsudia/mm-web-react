import { someMatch } from "../calculators";

export function matchEd(memOneCal, memTwoCal) {
  if (someMatch(memOneCal, memTwoCal) === true) {
    return 1;
  } else {
    return 0;
  }
}
