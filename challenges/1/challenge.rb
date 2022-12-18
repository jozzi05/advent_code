def part_one
  max = 0
  current = 0

  File.foreach(File.join(File.dirname(__FILE__), 'input')) do |line|
    if line == "\n"
      max = max < current ? current : max
      current = 0
    else
      current += line.to_i
    end
  end
  puts max
end

def part_two
  arr = []
  current = 0

  File.foreach(File.join(File.dirname(__FILE__), 'input')) do |line|
    if line == "\n"
      arr.push current
      current = 0
    else
      current += line.to_i
    end
  end
  puts arr.sort.last(3).sum
end

part_one
part_two
