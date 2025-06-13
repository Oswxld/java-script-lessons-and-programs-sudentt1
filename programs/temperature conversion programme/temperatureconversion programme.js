function convertCelsiusToKelvin(){
    let celsius = Number(document.getElementById("temperatureInput").value)
    let kelvin = celsius + 273.15;
    let result = document.getElementById("result");
    result.textContent = `Temperature in Kelvin: ${kelvin.toFixed(2)} K`;

}
function convertKelvinToCelsius(){
    let kelvin = Number(document.getElementById("temperatureInput").value)
    let celsius = kelvin - 273.15;
    let result = document.getElementById("result");
    result.textContent = `Temperature in celsius: ${celsius.toFixed(2)} celsius`;

}
function convertCelsiusToFahrenheit(){
    let celsius = Number(document.getElementById("temperatureInput").value)
    let Fahrenheit = celsius * 9/5 + 32;
    let result = document.getElementById("result");
    result.textContent = `Temperature in Farenheit: ${Fahrenheit.toFixed(2)} Farenheit`;


}
function convertFahrenheitToCelsius(){
    let Fahrenheit = Number(document.getElementById("temperatureInput").value)
    let celsius = (Fahrenheit - 32) * 5/9;
    let result = document.getElementById("result");
    result.textContent = `Temperature in celsius: ${celsius.toFixed(2)} celsius`;
}