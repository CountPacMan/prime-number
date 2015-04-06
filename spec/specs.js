describe('getPrimes', function() {
  it("returns prime numbers of 2 to equal 2", function() {
    expect(getPrimes(2)).to.deep.equal([2]);
  });

  it("returns prime numbers of 3 to equal [2, 3]", function() {
    expect(getPrimes(3)).to.deep.equal([2, 3]);
  });

  it("returns prime numbers of 4 to equal [2, 3]", function() {
    expect(getPrimes(4)).to.deep.equal([2, 3]);
  });

  it("returns prime numbers of 5 to equal [2, 3, 5]", function() {
    expect(getPrimes(5)).to.deep.equal([2, 3, 5]);
  });

  it("returns prime numbers of 6 to equal [2, 3, 5]", function() {
    expect(getPrimes(6)).to.deep.equal([2, 3, 5]);
  });

  it("returns prime numbers of 7 to equal [2, 3, 5, 7]", function() {
    expect(getPrimes(7)).to.deep.equal([2, 3, 5, 7]);
  });

  it("returns prime numbers of 9 to equal [2, 3, 5, 7]", function() {
    expect(getPrimes(9)).to.deep.equal([2, 3, 5, 7]);
  });

  it("returns prime numbers of 49 to equal [2, 3, 5, 7]", function() {
    expect(getPrimes(49)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
  });

});
