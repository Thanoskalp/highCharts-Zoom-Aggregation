// Generating data points directly in JavaScript
const dataPoints = (function () {
    var data = [],
    time = Date.UTC(2023, 3, 1), // April 1st, 2023
    i;
    for (i = 0; i < 4320; i += 1) {
        data.push([
            time + i * 600000, // 600000ms = 10 minutes
            Math.round(Math.random() * 100)
        ]);
    }
    return data;
}());
document.addEventListener('DOMContentLoaded', (event) => {
    const chart = window.Highcharts.chart('container', {
        chart: {
            type: 'line',
            zoomType: 'x',
            resetZoomButton: {
                position: {
                    align: 'right',
                    verticalAlign: 'top',
                    x: 0,
                    y: -30
                }
            }
        },
        title: {
            text: 'Data Visualization'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' units'
        },
        series: [{
            name: 'Data Points',
            data: dataPoints
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
});