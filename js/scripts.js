function getPrimes(number) {
  var primes = [2];
  for (var i = 3; i <= number; i++) {
    primes.push(i);
  }
  return primes;
}

jQuery(document).ready(function() {
  $("#prime-number").submit(function(event) {
    $("#error").empty();

    event.preventDefault();
  });
});
