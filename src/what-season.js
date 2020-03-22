module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || isNaN(date)) throw new Error();
  const season = ['winter', 'spring', 'summer', 'autumn'];
  let month = date.getMonth();
  if (month === 11 || month < 2) return season[0];
  if (month < 5) return season[1];
  if (month < 8) return season[2];
  if (month < 11) return season[3];
};
