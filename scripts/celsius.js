
function init(){
    const celsius = document.getElementById("celsiusLabel");
    const farenheit = document.getElementById("farenheitLabel");
    celsius.oninput = celsiusCalculator;

    function celsiusCalculator()
    {
        farenheitLabel.innerHTML =  (((celsius.value) * 9/5) + 32 );
    }
}
window.onload = init;
