// Highcharts settings
document.addEventListener('DOMContentLoaded', (event) => {
    // Ensure Highcharts is loaded
    if (typeof Highcharts === 'undefined') {
        var script = document.createElement('script');
        script.src = 'https://code.highcharts.com/highcharts.js';
        document.head.appendChild(script);
        script.onload = function() {
            initializeChart();
        };
    } else {
        initializeChart();
    }

    function initializeChart() {
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
                },
                min: Date.UTC(2023, 3, 1),
                max: Date.UTC(2023, 3, 30),
                scrollbar: {
                    enabled: true
                },
                events: {
                    afterSetExtremes: function(e) {
                        var chart = this.chart,
                            granularity = e.max - e.min;

                        // Update the series data based on zoom level (granularity)
                        // TODO: Implement data update logic based on granularity
                    }
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
                data: window.dataPoints
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
    }
});
