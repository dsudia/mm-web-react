"use strict";

let teacher1 = {
    email: "teacher1@teach.com",
    isTeacher: true,
    active: true,
    training: [0],
    trainingWgt: 1,
    locTypes: [0, 1, 2],
    locTypesWgt: 1,
    orgTypes: [2],
    orgTypesWgt: 1,
    sizes: [1, 2, 3],
    sizesWgt: 1,
    cals: [0],
    calsWgt: 1,
    states: [6],
    statesWgt: 1,
    traits: [2, 6, 7, 9, 12, 15, 19],
    traitsWgt: 1,
    ageRanges: [1, 2],
    ageRangesWgt: 1,
    matchSuggestions: []
};

let teacher2 = {
    email: "teacher2@teach.com",
    isTeacher: true,
    active: true,
    training: [0],
    trainingWgt: 1,
    locTypes: [0, 1],
    locTypesWgt: 1,
    orgTypes: [0, 1, 2, 3],
    orgTypesWgt: 1,
    sizes: [1, 2],
    sizesWgt: 1,
    cals: [0],
    calsWgt: 1,
    states: [6],
    statesWgt: 1,
    traits: [1, 3, 6, 9, 12, 16, 18],
    traitsWgt: 1,
    ageRanges: [1, 2],
    ageRangesWgt: 1,
    matchSuggestions: []
};

let teacher3 = {
    email: "teacher3@teach.com",
    isTeacher: true,
    active: true,
    training: [2],
    trainingWgt: 1,
    locTypes: [1, 2],
    locTypesWgt: 1,
    orgTypes: [4, 6],
    orgTypesWgt: 1,
    sizes: [0, 1, 2],
    sizesWgt: 1,
    cals: [0, 1],
    calsWgt: 1,
    states: [6],
    statesWgt: 1,
    traits: [0, 4, 9, 12, 13, 15, 19],
    traitsWgt: 1,
    ageRanges: [0, 1],
    ageRangesWgt: 1,
    matchSuggestions: []
};

let teacher4 = {
    email: "teacher4@teach.com",
    isTeacher: true,
    active: true,
    training: [3],
    trainingWgt: 1,
    locTypes: [2, 3],
    locTypesWgt: 1,
    orgTypes: [4, 5, 6],
    orgTypesWgt: 1,
    sizes: [0, 1],
    sizesWgt: 1,
    cals: [1],
    calsWgt: 1,
    states: [6],
    statesWgt: 1,
    traits: [2, 7, 9, 10, 11, 13, 17],
    traitsWgt: 1,
    ageRanges: [0, 1],
    ageRangesWgt: 1,
    matchSuggestions: []
};

let teacher5 = {
    email: "teacher5@teach.com",
    isTeacher: true,
    active: true,
    training: [0],
    trainingWgt: 1,
    locTypes: [1, 2],
    locTypesWgt: 1,
    orgTypes: [2, 3, 6],
    orgTypesWgt: 1,
    sizes: [1, 2, 3],
    sizesWgt: 1,
    cals: [0],
    calsWgt: 1,
    states: [6],
    statesWgt: 1,
    traits: [1, 2, 4, 6, 13, 14, 18],
    traitsWgt: 1,
    ageRanges: [2, 3],
    ageRangesWgt: 1,
    matchSuggestions: []
};

let teacher6 = {
    email: "teacher6@teach.com",
    isTeacher: true,
    active: true,
    training: [1],
    trainingWgt: 1,
    locTypes: [0, 1, 2],
    locTypesWgt: 1,
    orgTypes: [0, 1, 3],
    orgTypesWgt: 1,
    sizes: [2, 3],
    sizesWgt: 1,
    cals: [0],
    calsWgt: 1,
    states: [6],
    statesWgt: 1,
    traits: [0, 3, 9, 13, 15, 17, 19],
    traitsWgt: 1,
    ageRanges: [2, 3],
    ageRangesWgt: 1,
    matchSuggestions: []
};

let teacher7 = {
    email: "teacher7@teach.com",
    isTeacher: true,
    active: true,
    training: [1],
    trainingWgt: 1,
    locTypes: [0, 1],
    locTypesWgt: 1,
    orgTypes: [4, 6],
    orgTypesWgt: 1,
    sizes: [0, 1],
    sizesWgt: 1,
    cals: [0],
    calsWgt: 1,
    states: [6],
    statesWgt: 1,
    traits: [3, 6, 7, 10, 13, 15, 18],
    traitsWgt: 1,
    ageRanges: [0, 1],
    ageRangesWgt: 1,
    matchSuggestions: []
};

let teacher8 = {
    email: "teacher8@teach.com",
    isTeacher: true,
    active: true,
    training: [1],
    trainingWgt: 1,
    locTypes: [0, 1],
    locTypesWgt: 1,
    orgTypes: [6],
    orgTypesWgt: 1,
    sizes: [1, 2, 3],
    sizesWgt: 1,
    cals: [1],
    calsWgt: 1,
    states: [6],
    statesWgt: 1,
    traits: [0, 2, 4, 7, 10, 15, 19],
    traitsWgt: 1,
    ageRanges: [0, 1],
    ageRangesWgt: 1,
    matchSuggestions: []
};

let teacher9 = {
    email: "teacher9@teach.com",
    isTeacher: true,
    active: true,
    training: [0],
    trainingWgt: 1,
    locTypes: [2, 3],
    locTypesWgt: 1,
    orgTypes: [4, 5, 6],
    orgTypesWgt: 1,
    sizes: [1, 2],
    sizesWgt: 1,
    cals: [1],
    calsWgt: 1,
    states: [6],
    statesWgt: 1,
    traits: [1, 2, 4, 7, 8, 10, 14],
    traitsWgt: 1,
    ageRanges: [0],
    ageRangesWgt: 1,
    matchSuggestions: []
};

let teacher10 = {
    email: "teacher10@teach.com",
    isTeacher: true,
    active: true,
    training: [2],
    trainingWgt: 1,
    locTypes: [0, 1, 2],
    locTypesWgt: 1,
    orgTypes: [4, 6],
    orgTypesWgt: 1,
    sizes: [0, 1],
    sizesWgt: 1,
    cals: [0, 1],
    calsWgt: 1,
    states: [6],
    statesWgt: 1,
    traits: [3, 5, 9, 11, 16, 17, 19],
    traitsWgt: 1,
    ageRanges: [0],
    ageRangesWgt: 1,
    matchSuggestions: []
};

module.exports = [
    teacher1,
    teacher2,
    teacher3,
    teacher4,
    teacher5,
    teacher6,
    teacher7,
    teacher8,
    teacher9,
    teacher10
];
