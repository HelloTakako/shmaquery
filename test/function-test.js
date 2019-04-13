describe("parseBOB", () => {
  it("should return a valid result", () => {
    const input = '{"some":"string"}';
    const output = {"some":"string"};
    expect(あ.parseBOB(input)).to.deep.equal(output);
  });

  it("should fail with an invalid input", () => {
    const input = 'foobar';
    const badFn = function () { あ.parseBOB(input) };

    expect(badFn).to.throw(SyntaxError);
  });
});
