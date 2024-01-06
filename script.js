let button = document.getElementById('btn');
button.addEventListener('click', () => {
    let height_status = false;
    let weight_status = false;
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    if (height == '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'Provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = "";
        height_status = true;
    }
    if (weight == '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'Provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = "";
        weight_status = true;
    }
    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let result = document.getElementById('output');
        if (bmi < 18.6) {
            result.innerHTML = 'Under weight: ' + bmi;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = 'Normal weight: ' + bmi;
        } else if (bmi >= 25 && bmi <= 29.9) {
            result.innerHTML = 'Over weight: ' + bmi;
        } else {
            result.innerHTML = 'Obese: ' + bmi;
        }
    }
});
