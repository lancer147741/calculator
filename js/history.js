const history = (() => {
    const historyList = document.getElementById('history-list');
  
    function add(entry) {
      const li = document.createElement('li');
      li.textContent = entry;
      historyList.prepend(li);
    }
  
    return { add };
  })();
  