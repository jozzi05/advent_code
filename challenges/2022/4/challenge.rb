def per_line(&block)
  File.foreach(File.join(File.dirname(__FILE__), 'input'), &block)
end

def part_one
  sum = 0
  per_line do
    a_left, a_right, b_left, b_right = _1.split(%r{,|-}).map(&:to_i)
    sum += 1 if a_left <= b_left && a_right >= b_right || b_left <= a_left && b_right >= a_right
  end
  puts 'p1', sum
end

def part_two
  sum = 0
  per_line do
    a_left, a_right, b_left, b_right = _1.split(%r{,|-}).map(&:to_i)
    if (a_left..a_right).include?(b_left) ||
      (a_left..a_right).include?(b_right) ||
      (b_left..b_right).include?(a_left) ||
      (b_left..b_right).include?(a_right)
      sum += 1
    end
  end
  puts 'p2', sum
end

part_one
part_two
