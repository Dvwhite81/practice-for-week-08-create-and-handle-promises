function stretch(timeLeft) {
  return pause(timeLeft, 1000, 'stretch', 'done stretching');
}


function runOnTreadmill(timeLeft) {
  return pause(timeLeft, 500, 'run on treadmill', 'done running on treadmill');
}


function liftWeights(timeLeft) {
  return pause(timeLeft, 2000, 'lift weights', 'done lifting weights');
}


function workout(totalTime) {
  stretch(totalTime)
    .then((value) => runOnTreadmill(value))
    .then((value) => liftWeights(value))
    .then((value) => console.log(`done working out with ${value / 1000} seconds left`))
    .catch((reason) => console.error(reason));
}

// Helper function
function pause(timeLeft, timeNeeded, exercise, print) {
  const promise = new Promise((resolve, reject) => {
    if (timeLeft < timeNeeded) {
      reject(new Error(`you dont have enough time to ${exercise}`));
    } else {
      timeLeft -= timeNeeded;
      setTimeout(() => resolve(timeLeft), timeNeeded);
    }
  });

  return promise.then((value) => {
    console.log(print);
    return value;
  });
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


 workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
