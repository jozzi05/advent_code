import reader from 'line-reader';

const perLine = (each, after = () => {}) => {
  reader.eachLine('./input', each, after);
};

const partOne = () => {
  let sum = 0;
  perLine(
    (line) => {
      const [aLeft, aRight, bLeft, bRight] = line.split(/[,\-]/).map(n => parseInt(n));
      if(aLeft <= bLeft && aRight >= bRight || bLeft <= aLeft && bRight >= aRight)
        sum += 1;
    },
    () => console.log('p1', sum),
  );
};

const includes = (left,right, value) => left <= value && right >= value;

const partTwo = () => {
  let sum = 0;
  perLine(
    (line) => {
      const [aLeft, aRight, bLeft, bRight] = line.split(/[,\-]/).map(n => parseInt(n));
      console.log(line, includes(aLeft, aRight, bLeft), includes(aLeft, aRight, bRight), includes(bLeft, bRight, aLeft), includes(bLeft, bRight, aRight))
      if(includes(aLeft, aRight, bLeft) || includes(aLeft, aRight, bRight) || includes(bLeft, bRight, aLeft) || includes(bLeft, bRight, aRight))
        sum += 1;
    },
    () => console.log('p2', sum),
  );
};

partOne();
partTwo();
