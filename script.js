function convert() {
    var input = parseFloat(document.getElementById('input').value);
    var unitFrom = document.getElementById('unit-from').value;
    var unitTo = document.getElementById('unit-to').value;
    var result;
  
    if (unitFrom === unitTo) {
      result = input;
    } else if (unitFrom === 'celsius') {
      if (unitTo === 'fahrenheit') {
        result = (input * 9/5) + 32;
      } else if (unitTo === 'kelvin') {
        result = input + 273.15;
      }
    } else if (unitFrom === 'fahrenheit') {
      if (unitTo === 'celsius') {
        result = (input - 32) * 5/9;
      } else if (unitTo === 'kelvin') {
        result = (input - 32) * 5/9 + 273.15;
      }
    } else if (unitFrom === 'kelvin') {
      if (unitTo === 'celsius') {
        result = input - 273.15;
      } else if (unitTo === 'fahrenheit') {
        result = (input - 273.15) * 9/5 + 32;
      }
    }
  
    document.getElementById('result').innerHTML = result.toFixed(2);
  }
  