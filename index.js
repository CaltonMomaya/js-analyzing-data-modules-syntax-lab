require('datejs'); //

function combineUsers(...args) {
  //  return object
  const combinedObject = {
    users: []
  };

  // merge & loop
  for (const arr of args) {
    combinedObject.users.push(...arr);
  }

  //add mergedate with datejs
  const today = new Date();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  // returns
  return combinedObject;
}

module.exports = {
  combineUsers
};
