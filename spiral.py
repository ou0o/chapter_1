def print_spiral(string: str, size: int):
    for y in range(size):
        for x in range(size):
            rounds = min(x, y, size - x - 1, size - y - 1)
            index = 4 * rounds * (size - rounds) - 2 * rounds
            index += x + y
            index += 2 * (2 * (size - rounds - 1) - x - y) * (y > x)

            is_horizontal = max(size - y - 1, y) > x > min(y - 2, size - y - 2)
            is_right = x + 1 > size / 2
            is_up_corner = x + 1 + is_right * (size - 2 * (x + 1)) == y
            is_down_corner = x + is_right * (size - 1 - 2 * x) == size - y - 1

            print(
                string[index:] and string[index] or
                "|-..''><"[is_horizontal + 2 * is_up_corner + 4 * is_down_corner],
                end=" -"[is_horizontal]
            )
        print()

if __name__ == "__main__":
    print_spiral("HELLOPYTHON", 5)
    