const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693 / HALF_LIFE_PERIOD;
  let sample = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || sample > MODERN_ACTIVITY || sample <= 0 || isNaN(sample)) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / sample) / k);
};
