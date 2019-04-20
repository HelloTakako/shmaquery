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
});

describe("#shmAttr", () => {
  it("should get an attribute", () => {
    const el = document.createElement("p");
    el.classList.add("shmAttr");
    const c = "class";
    あ.shmAttr(el, c);
    expect(el.classList.value).to.equal("shmAttr");
  });
});

describe("#shmIndexOf", () => {
  it("should get an index number", () => {
    const arrEx = ["apple", "banana", "orange", "grape"];
    const result = あ.shmIndexOf(arrEx, "banana");
    expect(result).to.equal(1);
  });
});
