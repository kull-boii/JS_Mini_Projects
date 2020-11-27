const celciusInput = document.querySelector("#Celcius > input");
const fahrenheitInput = document.querySelector("#Fahrenheit > input");
const kelvinInput = document.querySelector("#Kelvin > input");

// functions
const convertCelcius = () => {
  const cTemp = Number(celciusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;

  fahrenheitInput.value = fTemp;
  kelvinInput.value = kTemp;
};

const convertFahrenheit = () => {
  const fTemp = Number(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = (fTemp + 459.67) * (5 / 9);

  celciusInput.value = cTemp;
  kelvinInput.value = kTemp;
};

const convertKelvin = () => {
  const kTemp = Number(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = (9 / 5) * (kTemp - 273) + 32;

  celciusInput.value = cTemp;
  fahrenheitInput.value = fTemp;
};

function main() {
  // eventlistners
  celciusInput.addEventListener("input", convertCelcius);
  fahrenheitInput.addEventListener("input", convertFahrenheit);
  kelvinInput.addEventListener("input", convertKelvin);
}

main();
