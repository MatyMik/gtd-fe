export const createDayIndex = (startingDayTimestamp, timestamptToGetTheDayIndexOf) => {
    const timeDelta = timestamptToGetTheDayIndexOf - startingDayTimestamp
    const dayIndex = Math.floor(timeDelta/(24*60*60*1000))
    return dayIndex;
}

export const createDayTimestamp = (daysFromToday = 0) => {
    const currentTimestamp = new Date().getTime();
    currentTimestamp.setHours(0,0,0,0);
    const dayOfInterestStartTimestamp = currentTimestamp + daysFromToday + 24*60*60*1000
    return dayOfInterestStartTimestamp
}