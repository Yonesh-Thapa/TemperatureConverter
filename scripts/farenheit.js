// window.onload = init;

function celsiusConverter()
{
        let celsius =  parseFloat(((farenheitLabel.value) - 32) * (5/9) );
        celsisuLabel.value = celsius; 
}
farenheitLabel.oninput = celsiusConverter;