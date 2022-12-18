import reader from 'line-reader';
import intersection from 'lodash/intersection.js';

/*
*
* a 1
b 2
c 3
d 4
e 5
f 6
g 7
h 8
i 9
j 10
k 11
l 12
m 13
n 14
o 15
p 16
q 17
r 18
s 19
t 20
u 21
v 22
w 23
x 24
y 25
z 26
A 27
B 28
C 29
D 30
E 31
F 32
G 33
H 34
I 35
J 36
K 37
L 38
M 39
N 40
O 41
P 42
Q 43
R 44
S 45
T 46
U 47
V 48
W 49
X 50
Y 51
Z 52
*
* */

function priority(value) {
  const charCode = value.charCodeAt();
  return charCode < 97 ? charCode - 38 : charCode - 96;
}

'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((v) => {
  console.log(v, priority(v));
});

function partOne() {
  let sum = 0;
  reader.eachLine('./input', (data) => {
    const n = Math.floor(data.length / 2);
    const [first, second] = [data.substring(0, n), data.substring(n)];
    const [item, ...rest] = intersection(first.split(''), second.split(''));
    if(rest.length) throw 'aha!';
    if(item) {
      sum += priority(item);
    }
  }, () => console.log(sum));
}

function partTwo() {
  let temp = [];
  let sum = 0;

  reader.eachLine('./input', (data, _, continueCb) => {
    if(temp.length < 2) {
      temp.push(data);
      continueCb();
    } else {
      temp.push(data)
      temp = temp.map(i => i.split(''));
      const [value] = intersection(...temp)
      sum += priority(value)
      console.log('s', sum)
      temp = []
      continueCb()
    }
  });
}

partOne();
partTwo();
