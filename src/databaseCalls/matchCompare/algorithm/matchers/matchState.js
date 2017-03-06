import { someMatch } from "../calculators";

export function matchState(memOneState, memTwoState) {
  if (someMatch(memOneState, memTwoState) === true) {
    return 1;
  } else {
    return -1;
  }
}
