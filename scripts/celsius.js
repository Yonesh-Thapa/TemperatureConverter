// window.onload = init;

function farenheitConverter()
{
        let farenheit =  parseFloat(((celsiusLabel.value) * 9/5) + 32 );
        farenheitLabel.value = farenheit; 
}
celsiusLabel.oninput = farenheitConverter;