def priority(val)
  return 0 unless val
  val.ord < 97 ? val.ord - 38 : val.ord - 96
end

def part_one
  sum = 0
  File.foreach(File.join(File.dirname(__FILE__), 'input')) do |data|
    n = data.length / 2
    sum += priority((data[...n].split('') & data[n..-1].split('')).first)
  end
  puts sum
end

def part_two
  sum = 0
  temp = []
  File.foreach(File.join(File.dirname(__FILE__), 'input')) do |data|
    temp.push(data)
    next if temp.length != 3
    sum += priority temp.map { |x| x.split('') }.reduce(&:&).first
    temp = []
  end
  puts sum
end

part_one
part_two
