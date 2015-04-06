describe('getPrimes', function() {
  it("returns prime numbers of 2 to equal 2", function() {
    expect(getPrimes(2)).to.deep.equal([2]);
  });

  it("returns prime numbers of 3 to equal [2, 3]", function() {
    expect(getPrimes(3)).to.deep.equal([2, 3]);
  });

});
