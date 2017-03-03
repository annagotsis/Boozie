const Statement = require('../entities/Statement.js');

class MatchPattern extends Statement {
  constuctor(p1, p2) {
    super();
    this.p1 = p1;
    this.p2 = p2;
  }
  toString() {
    return (`>>  ${this.p1} :: ${this.p2}`);
  }
}

module.exports = MatchPattern;
