import { someMatch } from "../calculators";

export function matchSize(memOneSize, memTwoSize) {
  if (someMatch(memOneSize, memTwoSize) === true) {
    return 1;
  } else {
    return 0;
  }
}
