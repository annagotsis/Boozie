class Print extends Statement {
  constuctor(body) {
    super();
    this.body = body;
  }
  toString() {
    return (this.body);
  }
}

module.exports = Print;
