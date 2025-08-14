const snake = (S,n) => {
    t = [...S];
    a = Array.from(Array(n), r => Array(2*n).fill(e=' '));
    x = y = 0;
    p = (b,d,f) => {            // set letter in all odd positions until
                                // exhausted, otherwise use snake
      a[y][x] = x&1 && t.shift() || b[d];
      f?.(d);                   // recurse unless end
    }
    i = 2*n-1;                  // counter for going in the same direction
    m = d => {
                                // the next position is set before p is called
      z = d&2;                  // forward or back?
      if (d&1) {                // vertical or horizontal?
        y+=1-z;
      } else {
        x+=1-z;
      }
      if (--i) {               // go on
        p('-|-|', d, m);
      } else if (n<2) {        // stop
        p('>><<', d);
      } else {                 // next direction
        i = d&1 ? 2*--n : n-1; // set going length, decrement n if horizontal
        p("..''", ++d%4, m);
      }
    }
    m(0);
    return a;
  }
  
const button = document.getElementById("snakeButton");

const snakeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const snakeSize = 5;

button.addEventListener("click", function() {
  const pattern = snake(snakeChars, snakeSize);
  console.log(pattern);

  console.log(snakeChars);

  for (let row of pattern) {
    console.log(row.join(' '));
  }
 
});

