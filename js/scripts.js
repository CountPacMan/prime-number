function getPrimes(number) {
  var primes = [2];
  // initialize primes array to include all number from 2 - number
  for (var i = 3; i <= number; i++) {
    primes.push(i);
  }

  // remove all multiples of known primes by iterating through starting at 2
  var primes_length = primes.length;
  console.log("pl = " + primes_length);
  for (var i = 2; i < primes.length; i++) {
    console.log("i = " + i + ", j = " + j);
    var j = 1;
    while (j < primes.length) {
      if (primes[j] != i && primes[j] % i === 0) {
        console.log("i = " + i + ", j = " + j);
        console.log("will be del " + primes[j]);
        primes.splice(j, 1);
        console.log("current primes " + primes);
        console.log("j is " + j);
      } else {
        j++;
      }
    }

    // for (var j = 1; j < primes_length; j++) {
    //   if (primes[j] % i === 0) {
    //     console.log("i = " + i + ", j = " + j);
    //     console.log("will be del " + primes[j]);
    //     primes.splice(j, 1);
    //     console.log("current primes " + primes);
    //     j = j - 1;
    //     console.log("j is " + j);
    //   }
    // }
  }
  return primes;
}

jQuery(document).ready(function() {
  $("#prime-number").submit(function(event) {
    $("#error").empty();

    event.preventDefault();
  });
});
