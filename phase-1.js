function stretch() {
  return pause(1, 'done stretching');
}

function runOnTreadmill() {
  return pause(0.5, 'done running on treadmill');
}

function liftWeights() {
  return pause(2, 'done lifting weights');
}

function workout() {
  stretch()
    .then(() => runOnTreadmill())
    .then(() => liftWeights())
    .then(() => console.log('done working out'));
}

// Helper function
function pause(numberOfSeconds, print) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(print), numberOfSeconds * 1000);
  });

  return promise.then(value => console.log(value));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
