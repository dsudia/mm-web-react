import { someMatch } from "../calculators";

export function matchTraining(memOneTr, memTwoTr) {
    if (someMatch(memOneTr, memTwoTr) === true) {
        return 1;
    } else {
        return -1;
    }
}
