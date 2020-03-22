module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let titleOfTeam = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      titleOfTeam += members[i].trim().substr(0, 1).toUpperCase();
    }
  }
    titleOfTeam = titleOfTeam.split('').sort().join('');
    return titleOfTeam
};