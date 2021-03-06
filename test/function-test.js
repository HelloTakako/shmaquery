describe('#parseBOB', () => {
  it('should return a valid result', () => {
    const input = '{"some":"string"}';
    const output = { some: 'string' };
    expect(あ.parseBOB(input)).to.deep.equal(output);
  });

  it('should fail with an invalid input', () => {
    const input = 'foobar';
    const badFn = function() {
      あ.parseBOB(input);
    };

    expect(badFn).to.throw(SyntaxError);
  });
});

describe('#shtrim', () => {
  describe('case with a trailing whitespace', () => {
    it('should remove it', () => {
      const input = '   lazy string   ';
      const output = 'lazy string';
      expect(あ.shtrim(input)).to.equal(output);
    });
  });
  describe('case with a trailing whitespace inside a tring', () => {
    it('should leave it', () => {
      const input = 'la   zy stri   ng';
      const output = 'la   zy stri   ng';
      expect(あ.shtrim(input)).to.equal(output);
    });
  });
  it('should fail with an invalid input', () => {
    const input = 0;
    const badFn = function() {
      あ.shtrim(input);
    };

    expect(badFn).to.throw(TypeError);
  });
});

describe('#shtype', () => {
  describe('case with type undefined', () => {
    it('should return "undefined" for undefined', () => {
      expect(あ.shtype(undefined)).to.equal('undefined');
    });
    it('should return "undefined" when no parameter is passed', () => {
      expect(あ.shtype()).to.equal('undefined');
    });
  });
  it('should return "array" for []', () => {
    expect(あ.shtype([])).to.equal('array');
  });
  it('should return "object" for {}', () => {
    expect(あ.shtype({})).to.equal('object');
  });
  it('should return "function" for function(){}', () => {
    expect(あ.shtype(function() {})).to.equal('function');
  });
});

describe('#shmadClass', () => {
  it("should add a class 'className'", () => {
    const el = document.createElement('p');
    const c = 'yas';
    あ.shmadClass(el, c);
    expect(el.classList.value).to.equal('yas');
  });
});

describe('#shmAttr', () => {
  it('should get an attribute', () => {
    const el = document.createElement('p');
    el.classList.add('shmAttr');
    const c = 'class';
    あ.shmAttr(el, c);
    expect(el.classList.value).to.equal('shmAttr');
  });
});

describe('#shmIndexOf', () => {
  it('should get an index number', () => {
    const arrEx = ['apple', 'banana', 'orange', 'grape'];
    const result = あ.shmIndexOf(arrEx, 'banana');
    expect(result).to.equal(1);
  });
});
