def function(string: str, number: int):
  for y in range(number):
    for x in range(number):
      rounds = min(x, y, number - x - 1, number - y - 1)
        # total increments after `rounds` revolutions and fix for overcounting
      index = 4 * rounds * (number - rounds) - 2 * rounds
      index += x + y  # east + south increment
      index += 2 * (2 * (number - rounds - 1) - x - y) * (y > x)  # west + north

      # See below for explanation
      is_horizontal = max(number - y - 1, y) > x > min(y - 2, number - y - 2)
      is_right = x + 1 > number / 2
      # Both inlined
      is_up_corner = x + 1 + is_right * (number - 2 * (x + 1)) == y
      is_down_corner = x + is_right * (number - 1 - 2 * x) == number - y - 1

      # is_middle = x + 1 - number % 2 == y == number // 2
      # is_middle = is_up_corner and is_down_corner
      # is_down = y > number / 2
      # is_left_corner = y + is_down * (number - 2 * y) == x + 1
      # is_right_corner = y + is_down * (number - 1 - 2 * y) != number - x - 1

      print(
        # string[index] if index < len(string) else
        string[index:] and string[index] or \
        # See below for explanation
        "|-..''><"[is_horizontal + 2 * is_up_corner + 4 * is_down_corner],
        end=" -"[is_horizontal]
      )
    print()