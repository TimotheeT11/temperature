function convertToCelsius(fah) {
  return (fah - 32) * 5/9;
}

function describeTemperature(fah) {
  const celsius = convertToCelsius(fah);
  let message = `${fah} degrees F is equal to ${celsius} degrees C.`;
  if (celsius < 0) {
    return message += " That's very cold";
  } else if (celsius < 20) {
    return message += " That's cold";
  } else if (celsius < 30) {
    return message += " That's warm";
  } else if (celsius < 40) {
    return message += " That's hot";
  } else if (celsius >= 40) {
    return message += " That's very hot";
  } else {
    return message += " Invalid input, try again.";
  }
}

const userTemp = prompt("Enter a temperature in fahrenheit:");
alert(describeTemperature(userTemp));