def part_one
  val = {
    "X": 1,
    "Y": 2,
    "Z": 3,
    "A": {
      "X": 3,
      "Y": 6,
      "Z": 0,
    },
    "B": {
      "X": 0,
      "Y": 3,
      "Z": 6,
    },
    "C": {
      "X": 6,
      "Y": 0,
      "Z": 3,
    }
  }
  sum = 0

  File.foreach(File.join(File.dirname(__FILE__), 'input')) do |line|
    him, me = line.split(' ').map(&:to_sym)
    sum += val[me] + val[him][me]
  end

  puts sum
end

def part_two
  val2 = {
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
  sum = 0
  File.foreach(File.join(File.dirname(__FILE__), 'input')) do |line|
    him, result = line.split(' ').map(&:to_sym)
    sum += val2[him][result]
  end
  puts sum
end

part_one
part_two
