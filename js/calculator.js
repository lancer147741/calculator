const calculator = (() => {
    let currentInput = '';
    let previousInput = '';
    let operator = '';
    let result = '';
    
    function calculate() {
      try {
        if (currentInput === '') return;
        result = Function("return " + currentInput)();
        history.add(currentInput + ' = ' + result);
        ui.updateDisplay(result);
        currentInput = result;
      } catch (e) {
        ui.updateDisplay("Error");
        currentInput = '';
      }
    }
  
    function append(value) {
      currentInput += value;
      ui.updateDisplay(currentInput);
    }
  
    function clearAll() {
      currentInput = '';
      ui.updateDisplay('');
    }
  
    function deleteLast() {
      currentInput = currentInput.slice(0, -1);
      ui.updateDisplay(currentInput);
    }
  
    return { calculate, append, clearAll, deleteLast };
  })();
  