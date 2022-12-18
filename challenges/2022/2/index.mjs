import reader from 'line-reader';
/*
*
* A for Rock,
* B for Paper, and
* C for Scissors
*
*
*
* X for Rock,
* Y for Paper, and
* Z for Scissors
*
* */

function partOne() {
  const val = {
    'X': 1,
    'Y': 2,
    'Z': 3,
    'A': {
      'X': 3,
      'Y': 6,
      'Z': 0,
    },
    'B': {
      'X': 0,
      'Y': 3,
      'Z': 6,
    },
    'C': {
      'X': 6,
      'Y': 0,
      'Z': 3,
    }
  }

  let sum = 0
  reader.eachLine('./input', (data) => {
    let [him, me] = data.split(' ')
    sum += val[me] + val[him][me]
  }, () => console.log(sum));
}
function partTwo() {
  const val2 = {
    'A': {
      'X': 0 + 3,
      'Y': 3 + 1,
      'Z': 6 + 2,
    },
    'B': {
      'X': 0 + 1,
      'Y': 3 + 2,
      'Z': 6 + 3,
    },
    'C': {
      'X': 0 + 2,
      'Y': 3 + 3,
      'Z': 6 + 1,
    }
  }

  let sum = 0;

  reader.eachLine('./input', (data) => {
    let [him, result] = data.split(' ')
    sum += val2[him][result]
  }, () => console.log(sum));
}

partOne();
partTwo();
