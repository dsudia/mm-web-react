export function addUser(user) {
    return {
        type: 'ADD_USER',
        payload: {
            id: user.id,
            profile: {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                isTeacher: user.isTeacher,
                avatarRef: user.avatarRef,
            },
            matchingProfile: {
                orgTypes: user.orgTypes,
                orgTypesWgt: user.orgTypesWgt,
                cals: user.cals,
                calsWgt: user.calsWgt,
                states: user.states,
                statesWgt: user.statesWgt,
                sizes: user.sizes,
                sizesWgt: user.sizesWgt,
                locTypes: user.locTypes,
                locTypesWgt: user.locTypesWgt,
                ageRanges: user.ageRanges,
                ageRangesWgt: user.ageRangesWgt,
                traits: user.traits,
                traitsWgt: user.traitsWgt,
                trainings: user.trainings,
                trainingsWgt: user.trainingsWgt
            }
        }
    }
}