// test b1: named export + odd whitespace
import {
  flatten
}
from
  '/web_modules/array-flatten.js';
flatten([1, [2, [3, [4, [5], 6], 7], 8], 9]);