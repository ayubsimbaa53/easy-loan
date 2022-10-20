/**
 * ----- Get Next Minutes From Now ----
 * @param {Number} N 
 * @returns 
 */
const getMinutesFromNow = function (N) {
    const userTime = N * 60;
    const timeObject = new Date();
    timeObject.setTime(timeObject.getTime() + 1000 * userTime);
    return timeObject;
};

/**
 * ---- Get Next Month From Now ----
 * @param {*} N 
 * @returns 
 */
const getMonthFromNow = function (N) {
    const date = new Date();
    const targetMonth = date.getMonth() + N;
    date.setMonth(targetMonth);

    if (date.getMonth() !== targetMonth % 12) {
        date.setDate(0);
    }
    return date;
}


module.exports = {
    getMinutesFromNow,
    getMonthFromNow
};