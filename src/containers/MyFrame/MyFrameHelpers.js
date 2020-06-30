export const createDayIndex = (startingDayTimestamp, timestamptToGetTheDayIndexOf) => {
    const timeDelta = timestamptToGetTheDayIndexOf - startingDayTimestamp
    const dayIndex = Math.floor(timeDelta/(24*60*60*1000))
    return dayIndex;
}