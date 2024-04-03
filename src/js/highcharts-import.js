// Import Highcharts
if (typeof Highcharts === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://code.highcharts.com/highcharts.js';
    document.head.appendChild(script);
}

// Ensure dataPoints is globally accessible
if (typeof dataPoints === 'undefined' && typeof window.dataPoints !== 'undefined') {
    var dataPoints = window.dataPoints;
}