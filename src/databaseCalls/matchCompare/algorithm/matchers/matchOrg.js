import { someMatch } from "../calculators";

export function matchOrg(memOneOrg, memTwoOrg) {
    if (someMatch(memOneOrg, memTwoOrg) === true) {
        return 1;
    } else {
        return 0;
    }
}
