const generateClick = document.getElementById('generate-click').addEventListener('click', function() {
    const pines = getPin();
    document.getElementById('generate-input').value = pines;

})


function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinNumber = pin + '';
    if (pinNumber.length == 4) {
        return pin;
    }
    return getPin();

}
document.getElementById('key-pad').addEventListener('click', function(event) {


    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }

    } else {
        const previusNumber = calcInput.value;
        const newCalc = previusNumber + number;
        calcInput.value = newCalc;


    }





})

function veryfyButton() {
    const generateInput = document.getElementById('generate-input').value;
    const calcInputButton = document.getElementById('calc-input').value;
    const notyfySuccess = document.getElementById('notify-success');
    const notyfailed = document.getElementById('notify-failed');

    if (generateInput == calcInputButton) {

        notyfySuccess.style.display = 'block';
        notyfailed.style.display = 'none';


    } else {

        notyfailed.style.display = 'block';
        notyfySuccess.style.display = 'none';

    }
}