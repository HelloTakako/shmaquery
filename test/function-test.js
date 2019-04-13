describe("#parseBOB", () => {
  it("should return a valid result", () => {
    const input = '{"some":"string"}';
    const output = { some: "string" };
    expect(あ.parseBOB(input)).to.deep.equal(output);
  });

  it("should fail with an invalid input", () => {
    const input = "foobar";
    const badFn = function() {
      あ.parseBOB(input);
    };

    expect(badFn).to.throw(SyntaxError);
  });
});

describe("#shmadClass", () => {
  it("should add a class 'className'", () => {
    const el = document.createElement("p");
    const c = "yas";
    あ.shmadClass(el, c);
    expect(el.classList.value).to.equal("yas");
  });

  // it("should fail if the class name is not 'yas'.", () => {
  //   const d = "co";
  //   const badFnAddClass = function() {
  //     あ.shmadClass(el, d);
  //   };

  //   expect(badFnAddClass).to.throw(AssertionError);
  // });
});

describe("#shmAttr", () => {
  it("should get an attribute 'src'", () => {
    const elem = document.createElement("p");
    const c = "yas";
    あ.shmadClass(el, c);
    expect(el.classList.value).to.equal("yas");
  });
});
