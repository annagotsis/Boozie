const Literal = require('../entities/literal.js');
const Type = require('../entities/Type.js');

class StringLiteral extends Literal {
  constructor(string) {
    super();
    this.value = string;
  }
  analyze() {
    this.type = Type.STRING;
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(StringLiteral ${this.value} )`);
  }
}

module.exports = StringLiteral;
