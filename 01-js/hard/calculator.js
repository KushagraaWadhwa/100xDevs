class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) throw new Error("Division by zero is not allowed.");
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove all whitespace from the expression
    expression = expression.replace(/\s+/g, '');
    // Validate the expression for invalid characters
    if (/[^0-9+\-*/().]/.test(expression)) {
      throw new Error('Invalid characters in expression');
    }

    try {
      // Use the Function constructor to evaluate the expression safely
      const evaluatedResult = new Function(`return (${expression})`)();
      if (typeof evaluatedResult !== 'number' || isNaN(evaluatedResult)) {
        throw new Error('Invalid expression');
      }
      this.result = evaluatedResult;
      return this.result;
    } catch (error) {
      throw new Error('Invalid expression');
    }
  }
}

module.exports = Calculator;
