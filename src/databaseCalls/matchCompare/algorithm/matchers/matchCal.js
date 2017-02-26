import { someMatch } from '../calculators'

export function matchCal(memOneCal, memTwoCal) {
    if (someMatch(memOneCal, memTwoCal) === true) {
        return 1;
    } else {
        return (0);
    }
};
