function switchTab(tabId) {
    const allTabs = document.querySelectorAll('.tab-panel');
    allTabs.forEach(tab => {
        tab.style.display = 'none';
    });
    const activeTab = document.getElementById(tabId);
    activeTab.style.display = 'block';
}

function handleLengthSubmit(event) {
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
    document.getElementById('lengthResultText').textContent = resultText;
    document.getElementById('lengthResult').style.display = 'block';
}

function handleWeightSubmit(event) {
    event.preventDefault();  // Prevent form submission to avoid page reload

    // Get the values from the form
    const weightInput = document.getElementById('weightInput').value;
    const fromUnit = document.getElementById('fromWeightUnit').value;
    const toUnit = document.getElementById('toWeightUnit').value;

    if (!weightInput || !fromUnit || !toUnit) {
        alert('Please fill out all fields.');
        return;
    }

    console.log("Weight Input:", weightInput);
    console.log("Dropdown 1:", fromUnit);
    console.log("Dropdown 2:", toUnit);

    // Convert to kilograms first
    let weightInKilograms = 0;

    switch (fromUnit) {
        case 'mg':
            weightInKilograms = weightInput / 1e6;
            break;
        case 'g':
            weightInKilograms = weightInput / 1000;
            break;
        case 'kg':
            weightInKilograms = weightInput;
            break;
        case 'ton':
            weightInKilograms = weightInput * 1000;
            break;
        case 'lb':
            weightInKilograms = weightInput * 0.453592;
            break;
        case 'oz':
            weightInKilograms = weightInput * 0.0283495;
            break;
        default:
            alert('Invalid from unit');
            return;
    }

    // Then convert kilograms to target unit
    let result = 0;

    switch (toUnit) {
        case 'mg':
            result = weightInKilograms * 1e6;
            break;
        case 'g':
            result = weightInKilograms * 1000;
            break;
        case 'kg':
            result = weightInKilograms;
            break;
        case 'ton':
            result = weightInKilograms / 1000;
            break;
        case 'lb':
            result = weightInKilograms / 0.453592;
            break;
        case 'oz':
            result = weightInKilograms / 0.0283495;
            break;
        default:
            alert('Invalid to unit');
            return;
    }

    document.getElementById('weightForm').style.display = 'none';
    const resultText = `${weightInput} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
    document.getElementById('weightResultText').textContent = resultText;
    document.getElementById('weightResultBlock').style.display = 'block';
}

function handleTemperatureSubmit(event) {
    event.preventDefault();

    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const fromUnit = document.getElementById('fromTempUnit').value;
    const toUnit = document.getElementById('toTempUnit').value;

    if (isNaN(temperatureInput) || !fromUnit || !toUnit) {
        alert('Please fill out all fields with valid inputs.');
        return;
    }

    let tempInCelsius;

    // Convert from source unit to Celsius
    switch (fromUnit) {
        case 'C':
            tempInCelsius = temperatureInput;
            break;
        case 'F':
            tempInCelsius = (temperatureInput - 32) * 5 / 9;
            break;
        case 'K':
            tempInCelsius = temperatureInput - 273.15;
            break;
        case 'R':
            tempInCelsius = temperatureInput * 5 / 4;
            break;
        default:
            alert('Invalid from unit');
            return;
    }

    let result;

    // Convert from Celsius to target unit
    switch (toUnit) {
        case 'C':
            result = tempInCelsius;
            break;
        case 'F':
            result = (tempInCelsius * 9 / 5) + 32;
            break;
        case 'K':
            result = tempInCelsius + 273.15;
            break;
        case 'R':
            result = tempInCelsius * 4 / 5;
            break;
        default:
            alert('Invalid to unit');
            return;
    }

    document.getElementById('temperatureForm').style.display = 'none';
    const resultText = `${temperatureInput} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
    document.getElementById('temperatureResultText').textContent = resultText;
    document.getElementById('temperatureResultBlock').style.display = 'block';
}


function reset(form) {
    // Show the form again and hide the result div
    document.getElementById(form).style.display = 'block';
    document.getElementById('lengthResult').style.display = 'none';
    document.getElementById('weightResultBlock').style.display = 'none';
    document.getElementById('temperatureResultBlock').style.display = 'none';
}
