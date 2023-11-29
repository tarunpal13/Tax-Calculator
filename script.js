function calculateTax() {
    const baseSalary = parseFloat(document.getElementById('baseSalary').value) || 0;
    const hra = parseFloat(document.getElementById('hra').value) || 0;
    const da = parseFloat(document.getElementById('da').value) || 0;
    const ta = parseFloat(document.getElementById('ta').value) || 0;

    const totalIncome = baseSalary + hra + da + ta;
    const tax = calculateTaxAmount(totalIncome);

    displayResult(tax);
}

function calculateTaxAmount(totalIncome) {

    const taxRate = 0.15;
    const taxAmount = totalIncome * taxRate;
    return taxAmount;
}

function displayResult(tax) {
    const resultContainer = document.getElementById('result-container');
    const totalTaxElement = document.getElementById('totalTax');

    totalTaxElement.textContent = `$${tax.toFixed(2)}`;
    resultContainer.style.display = 'block';
}
