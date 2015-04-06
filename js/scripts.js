function getPrimes(number) {
  var primes = [2];
  // initialize primes array to include all number from 2 - number
  for (var i = 3; i <= number; i++) {
    primes.push(i);
  }

  // remove all multiples of known primes by iterating through starting at 2
  var primes_length = primes.length;
  for (var i = 2; i < primes.length; i++) {
    var j = 1;
    while (j < primes.length) {
      if (primes[j] != i && primes[j] % i === 0) {
        primes.splice(j, 1);
      } else {
        j++;
      }
    }
  }
  return primes;
}


jQuery(document).ready(function() {
  $("#prime-number").submit(function(event) {
    $("#error").empty();

    if($("#number").val().search(/[^0-9]/) !== -1) {
      $("#error").prepend("<p>Only integers are valid</p>");
      $("#result").hide();
    } else {
      var number = parseInt($("#number").val());
      var prime_array = getPrimes(number);
      var primes_string = prime_array.join(", ");

      $("#numbers").text(primes_string);
      $("#result").show();
    }
    event.preventDefault();
  });
});
