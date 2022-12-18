def per_line(&block)
  File.foreach(File.join(File.dirname(__FILE__), 'input'), &block)
end

def part_one
  parsed_state = false
  state = []
  parse_state = ->(arr) do
    arr.each_with_index do |v, i|
      next if v == '---'
      state[i] = [v, *state[i]]
    end
  end

  parse_move = ->(arr) do
    n, j, k = arr.map(&:to_i)
    n.times { state[k - 1] << state[j-1].pop }
  end

  per_line do |line|
    next if line.start_with? " 1 "
    arr = line.split("\s")
    arr.length == 6 ? parse_move.(arr[(1..) % 2]) : parse_state.(arr)
  end

  puts state.flat_map(&:last).join('').gsub /\[|\]/, ''
end

def part_two
  per_line do

  end
end

part_one
part_two
