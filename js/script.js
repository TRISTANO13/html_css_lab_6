function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Nom complet : ${firstName} ${lastName}</p>
        <p>Email : ${email}</p>
        <p>Adresse : ${address}</p>
        <p>Ville : ${city}, ${province}</p>
        <p>Abonnement : ${membership}</p>
    `;
}

document.getElementById('calculate').addEventListener('click', myExcelFuns);

function myExcelFuns() {
    const numberStr = document.getElementById('numbers').value.trim();

    if (!numberStr) {
        alert('Please type your numbers separated by spaces.');
        return;
    }

    const numberArr = numberStr.split(' ').filter(num => num !== '').map(Number);
    const finalNumericArray = numberArr.filter(num => !isNaN(num));

    const autoSumRadio = document.getElementById('autoSum');
    const averageRadio = document.getElementById('average');
    const minRadio = document.getElementById('min');
    const maxRadio = document.getElementById('max');

    let result; // Local variable to hold the calculation result

    if (autoSumRadio.checked) {
        result = finalNumericArray.reduce((a, b) => a + b, 0);
    } else if (averageRadio.checked) {
        result = finalNumericArray.reduce((a, b) => a + b, 0) / finalNumericArray.length;
    } else if (maxRadio.checked) {
        result = Math.max(...finalNumericArray);
    } else if (minRadio.checked) {
        result = Math.min(...finalNumericArray);
    } else {
        result = 'Invalid function selected';
    }

    document.getElementById('output').textContent = `Output: ${result}`;
}


