function display(value){
    document.getElementById('area').value += value;
  }
  function clearDisplay() {
      document.getElementById('area').value = '';
  }
  function clearone(){
      const values=document.getElementById('area');
      values.value=values.value.slice(0,-1);
  }
  function result() {
      const final = document.getElementById('area');
     try {
      final.value = eval(final.value);
     } catch(e) {
        final.value ='Error';
     }
  }
  document.addEventListener('keydown', function(event){
      const events=document.getElementById('area');
      if (event.key === 'Enter') {
          result();
  
      }
      if (key === 'Backspace') {
          clearone();
      }
      if (key.toLowerCase() === 'c') {
          clearDisplay();
      }
  });