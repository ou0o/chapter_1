// s = input string, n = size parameter
const createMatrix = (s) => (n) => {
    for(
      // m[] is the output matrix
      // k is a pointer into s
      // (x, y) is the current position in the matrix
      m = [k = x = y = 0];
      // stop when n = -1
      ~n;
    )
      for( 
        // d is the direction
        d = -2;
        // stop when n = -1 or d = 2
        // i is the counter for the next loop
        i = ~n && d++ < 2;
        // decrement n if n = 0, or d is odd and y != 0
        n -= !n | d & !!y
      )
        for(
          ;
          // the width is 2n-1 if d is odd, or n if d is even
          // there's a special case for the last iteration
          i++ < (d & 1 ? w = n * 2 - 1 : n || 2);
          // (x, y) <- (x + dx, y + dy)
          x -= d % 2,
          y -= ~-d % 2
        )
          // if m[y] is undefined, initialize it to w spaces
          (m[y] ||= [..."".padEnd(w)])[x] =
            // if either d or x is even, attempt to get the next
            // character from s
            d * x + 1 & 1 && s[k++]
            // if falsy or undefined, use a special character:
            // - "|" or "-" for segments (i > 2)
            // - "." or "'" for corners (i = 2, n ≠ 0)
            // - "<" or ">" for the final character (i = 2, n = 0)
            || "|-..''< >"[i > 2 ? d & 1 : d - 3 * ~!n];
    return m
  }

var s = "PLEASENO";
var n = 3;
// Call the function with a string and a size
const matrix = createMatrix(s)(n);

// Log the result
console.log(matrix);
console.log(s);

for (let row of matrix) {
  console.log(row.join(' '));
}

// Convert the matrix to a string
const matrixString = matrix
.map(row => row.filter(c => /[a-zA-Z>]/.test(c)).join(' - '))
.join('\n');

// document.getElementById('output').textContent = matrixString;

document.getElementById('output').innerHTML =
  `<h2>${s}</h2>` + `<p>${matrixString}</p>`;

