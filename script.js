function calculateSolar() {
    var zone = document.getElementById('zone').value;
    var systemSize = document.getElementById('systemSize').value;
    var efficiency = document.getElementById('efficiency').value;

    var months = [
        'january', 'february', 'march', 'april', 'may', 'june', 
        'july', 'august', 'september', 'october', 'november', 'december'
    ];
    
    var totalSunlight = 0;
    var validInputs = true;
    
    months.forEach(function(month) {
        var monthValue = document.getElementById(month).value;
        if (monthValue) {
            totalSunlight += parseFloat(monthValue);
        } else {
            validInputs = false;
        }
    });

    if (zone && systemSize && efficiency && validInputs) {
        var avgDailySunlight = totalSunlight / 12;
        var dailyOutput = (avgDailySunlight * systemSize * (efficiency / 100)).toFixed(2);
        var yearlyOutput = (dailyOutput * 365).toFixed(2);
        
        document.getElementById('result').innerHTML = 
            `<p>Zone: ${zone}</p>
             <p>Average Daily Sunlight: ${avgDailySunlight.toFixed(2)} kWh/m²/day</p>
             <p>Daily Energy Output: ${dailyOutput} kWh</p>
             <p>Yearly Energy Output: ${yearlyOutput} kWh</p>`;
    } else {
        document.getElementById('result').innerHTML = '<p class="error">Please fill out all fields.</p>';
    }
};