
function convert(unit) {
  let celsius = document.getElementById('celsius').value;
  let fahrenheit = document.getElementById('fahrenheit').value;
  let kelvin = document.getElementById('kelvin').value;

  switch (unit) {
    case 'celsius':
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = parseFloat(celsius) + 273.15;
      break;
    case 'fahrenheit':
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (parseFloat(fahrenheit) + 459.67) * 5/9;
      break;
    case 'kelvin':
      celsius = kelvin - 273.15;
      fahrenheit = (parseFloat(kelvin) * 9/5) - 459.67;
      break;
  }

  document.getElementById('celsius').value = celsius.toFixed(2);
  document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
  document.getElementById('kelvin').value = kelvin.toFixed(2);
}
