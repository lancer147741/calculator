const ui = (() => {
    const display = document.getElementById('display');
  
    function updateDisplay(value) {
      display.value = value;
    }
  
    function append(value) {
      calculator.append(value);
    }
  
    function clearAll() {
      calculator.clearAll();
    }
  
    function deleteLast() {
      calculator.deleteLast();
    }
  
    return { updateDisplay, append, clearAll, deleteLast };
  })();
  