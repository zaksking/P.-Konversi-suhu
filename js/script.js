function ConvertToFahrenhait() {
    var celcius = document.getElementById('askk').value;
    var Fahrenheitanswer = (celcius *9/5) + 32;
    document.getElementById('answer').value = Fahrenheitanswer.toFixed(2)
}

function ConvertToCelcius() {
    var fahrenhait = document.getElementById('askk').value;
    var celciusanswer = (fahrenhait - 32) *5/9;
    document.getElementById('answer').value = celciusanswer.toFixed(2);
}

function DsReset() {
    document.getElementById('askk').value = null;
    document.getElementById('answer').value = null;
}