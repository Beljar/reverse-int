 module.exports = function reverse (n) {
  n = Math.abs(n);
  let out;
  n == 0 ? out = [0] : out = [];
  while (n!=0){
    out.push(n % 10);
    n = Math.floor(n / 10);
  }
  return Number(out.join(""));
}

/* console.log(reverse(162));
console.log(reverse(-192));
console.log(reverse(0));
console.log(reverse(100)); */