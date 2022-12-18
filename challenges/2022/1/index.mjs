import reader from 'line-reader';

function partOne() {
  let max = 0;
  let current = 0;
  reader.eachLine('./input', (data) => {
    if(!data.length) {
      max = max < current ? current : max;
      current = 0;
    } else {
      current += parseInt(data);
    }
  }, () => console.log(max));
}

function partTwo() {
  let arr = [];
  let current = 0;
  reader.eachLine('./input', (data) => {
    if(!data.length) {
      arr.push(current);
      current = 0;
    } else {
      current += parseInt(data);
    }
  }, () => {
    let [a, b, c] = arr.sort((a, b) => a > b ? -1 : 0);
    console.log(a + b + c);
  });
}

partOne();
partTwo();
