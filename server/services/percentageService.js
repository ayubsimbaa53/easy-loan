// Get Percentage of an amount...
const getWithPercentage = (amount, percentage) => {
    const result = amount * (percentage / 100);
    return parseFloat(result.toFixed(2));
};

module.exports = { getWithPercentage };