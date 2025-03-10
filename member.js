function skillsMember( ) {
  var member = this._doc;
  var skills = member.skills;
  var skillsArray = [];
  for (var i = 0; i < skills.length; i++) {
    skillsArray.push(skills[i].name);
  }
  return skillsArray;
}