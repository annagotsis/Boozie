class Statement {
  constructor(body) {
    this.body = body;
  }
  optimize() {
    return this;
  }
  toString() {
    return (`(Statement ${this.body})`);
  }
  Statement.prototype.analyze = (context) => {
    this.body.analyze(context);
  }
}
module.exports = Statement;
