const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const sample =
    typeof sampleActivity === 'string' ? Number(sampleActivity.trim()) : NaN;

  if (sample > 0 && sample <= 14.8) {
    return Math.abs(
      Math.floor(
        (HALF_LIFE_PERIOD * Math.log(sample / MODERN_ACTIVITY)) / Math.log(2)
      )
    );
  }

  return false;
}

module.exports = {
  dateSample,
};
