function switchTab(tabId) {
    const allTabs = document.querySelectorAll('.tab-panel');
    allTabs.forEach(tab => {
        tab.style.display = 'none';
    });
    const activeTab = document.getElementById(tabId);
    activeTab.style.display = 'block';
}

function handleSubmit(event) {
    event.preventDefault();  // Prevent form submission to avoid page reload
    
    // Get the values from the form
    const lengthInput = document.getElementById('lengthInput').value;
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;

    if (!lengthInput || !fromUnit || !toUnit) {
        alert('Please fill out all fields.');
        return;
    }

    console.log("Number Input:", lengthInput);
    console.log("Dropdown 1:", from);
    console.log("Dropdown 2:", to);
    
    //convert to meter first
    let lengthInMeters = 0;

    switch (from) {
        case 'mm':
            lengthInMeters = lengthInput / 1000;
            break;
        case 'cm':
            lengthInMeters = lengthInput / 100;
            break;
        case 'm':
            lengthInMeters = lengthInput;
            break;
        case 'km':
            lengthInMeters = lengthInput * 1000;
            break;
        case 'inch':
            lengthInMeters = lengthInput * 0.0254;
            break;
        case 'foot':
            lengthInMeters = lengthInput * 0.3048;
            break;
        case 'yard':
            lengthInMeters = lengthInput * 0.9144;
            break;
        case 'mile':
            lengthInMeters = lengthInput * 1609.34;
            break;
        default:
            alert('Invalid from unit');
            return;
    }

    // Then convert meter to target unit
    let result = 0;

    switch (to) {
        case 'mm':
            result = lengthInMeters * 1000;
            break;
        case 'cm':
            result = lengthInMeters * 100;
            break;
        case 'm':
            result = lengthInMeters;
            break;
        case 'km':
            result = lengthInMeters / 1000;
            break;
        case 'inch':
            result = lengthInMeters / 0.0254;
            break;
        case 'foot':
            result = lengthInMeters / 0.3048;
            break;
        case 'yard':
            result = lengthInMeters / 0.9144;
            break;
        case 'mile':
            result = lengthInMeters / 1609.34;
            break;
        default:
            alert('Invalid to unit');
            return;
    }

    document.getElementById('lengthForm').style.display = 'none';
    const resultText = `${lengthInput} ${from} = ${result.toFixed(2)} ${to}`;
    document.getElementById('result').textContent = resultText;
    document.getElementById('resultDiv').style.display = 'block';
}

function reset() {
    // Show the form again and hide the result div
    document.getElementById('lengthForm').style.display = 'block';
    document.getElementById('resultDiv').style.display = 'none';
}
