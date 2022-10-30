const addBinary = function(a, b) {
  let carry = 0, result = "";

  let i = a.length - 1, j = b.length - 1;

  while(i >= 0 || j >= 0) {
    let num1 = i < 0 ? 0 : a[i] | 0;
    let num2 = j < 0 ? 0 : b[j] | 0;
    carry = carry + num1 + num2;
    result = carry % 2 + result; //concat string in proper order
    carry = carry / 2 | 0;
    i--;
    j--;
  }

  return carry ? carry + result : result;
};


