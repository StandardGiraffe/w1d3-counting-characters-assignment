# w1d3-counting-characters-assignment
w1d3 Counting Characters Assignment


### Algorithm:

- Take input (argv) and remove spaces
- Build an empty object
- Travel through the processed input one character at a time
  - read the character at current index
  - check object to see if current character exists as a key in it
    - if true, increment
    - if false, create key with name of current character = 1
- Return the object
