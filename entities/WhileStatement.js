const Statement = require('../entities/Statement.js');
const BooleanLiteral = require('../entities/BooleanLiteral.js');

class WhileStatement extends Statement {
  constructor(condition, body) {
    super();
    this.condition = condition;
    this.body = body;
    Object.assign(this, { condition, body });
  }
  analyze(context) {n
    this.condition.analyze(context);
    const bodyContext = context.createChildContextForLoop();
    this.body.forEach(s => s.analyze(bodyContext));
  }
  optimize() {
    this.condition = this.condition.optimize();
    if (this.condition instanceof BooleanLiteral && this.condition.value === false) {
      return null;
    }
    this.body.map(s => s.optimize()).filter(s => s !== null);
    // Suggested: Look for returns/breaks in the middle of the body
    return this;
  }
  toString() {
    return (`(WhileStatement ${this.condition} { ${this.body} })`);
  }
}

module.exports = WhileStatement;
