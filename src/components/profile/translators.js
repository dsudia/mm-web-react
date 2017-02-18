export function translateAgeRanges() {
  const ageRangeNums = JSON.parse(localStorage.getItem(`ageRanges`));
  if (ageRangeNums) {
    const ageRangeWords = ageRangeNums.map(el => {
      switch (el) {
        case 0:
          return `0 to 3`;
        case 1:
          return `3 to 6`;
        case 2:
          return `6 to 9`;
        case 3:
          return `9 to 12`;
        case 4:
          return `12 to 15`;
        case 5:
          return `15 to 18`;
        default:
          return null;
      }
    });
    const ageRangeList = ageRangeWords.join(`, `);
    return ageRangeList;
  }
  return null;
}

export function translateCals() {
  const calNums = JSON.parse(localStorage.getItem(`cals`));
  if (calNums === 0) {
    return `Traditional`;
  } else if (calNums === 1) {
    return `Year Round`;
  }
  return null;
}

export function translateOrgTypes() {
  const orgType = JSON.parse(localStorage.getItem(`orgType`));
  if (orgType) {
    switch (orgType) {
      case 0:
        return `Public District`;
      case 1:
        return `Public Magnet`;
      case 2:
        return `Public Charter`;
      case 3:
        return `Public Innovation`;
      case 4:
        return `Private For-Profit, Single Owner`;
      case 5:
        return `Private For-Profit, Corporate Owner`;
      case 6:
        return `Private Non-Profit`;
      default:
        return null;
    }
  }
  return null;
}

export function translateSizes() {
  const sizes = JSON.parse(localStorage.getItem(`sizes`));
  switch (sizes) {
    case 0:
      return `4 or less`;
    case 1:
      return `4 to 9`;
    case 2:
      return `10 to 19`;
    case 3:
      return `20 or more`;
    default:
      return null;
  }
}

export function translateTrainings() {
  const trainingsNums = JSON.parse(localStorage.getItem(`trainings`));
  if (trainingsNums) {
    const trainingsWords = trainingsNums.map(el => {
      switch (el) {
        case 0:
          return `AMI`;
        case 1:
          return `AMS`;
        case 2:
          return `MCI`;
        case 3:
          return `SNM`;
        case 4:
          return `Other`;
        default:
          return null;
      }
    });
    const trainingsList = trainingsWords.join(`, `);
    return trainingsList;
  }
  return null;
}

export function translateTraits() {
  const traitsNums = JSON.parse(localStorage.getItem(`traits`));
  if (traitsNums) {
    const traitsWords = traitsNums.map(el => {
      switch (el) {
        case 0:
          return `Ambitious`;
        case 1:
          return `Humorous`;
        case 2:
          return `Collaborative`;
        case 3:
          return `Independent`;
        case 4:
          return `Extroverted`;
        case 5:
          return `Introverted`;
        case 6:
          return `Artistic`;
        case 7:
          return `Musical`;
        case 8:
          return `Creative`;
        case 9:
          return `Organized`;
        case 10:
          return `Playful`;
        case 11:
          return `Quiet`;
        case 12:
          return `Verbal Communicator`;
        case 13:
          return `Written Communicator`;
        case 14:
          return `Joyful`;
        case 15:
          return `Techie`;
        case 16:
          return `Analog`;
        case 17:
          return `Patient`;
        case 18:
          return `Spontaneous`;
        case 19:
          return `Routine Oriented`;
        default:
          return null;
      }
    });
    const traitsList = traitsWords.join(`, `);
    return traitsList;
  }
  return null;
}
