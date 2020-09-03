(function () {
    "use:strict";
    angular.module("myApp").controller("paymentChartCtrl", ["$scope", "$state", paymentChartCtrl]);

    function paymentChartCtrl($scope, $state) {

        Highcharts.chart('lineChart', {
            title: {
                text: 'Payment Growth from Year, 2014-2019'
            },  
            xAxis: {
                title: {
                    text: 'Years'
                },
                categories: ['2014', '2015', '2016', '2017', '2018', '2019']
            },
            yAxis: {
                title: {
                    text: 'Rupees'
                }
            },
            //legend: {
            //    layout: 'vertical',
            //    align: 'right',
            //    verticalAlign: 'middle'
            //},
            series: [{
                name: 'Rupees',
                data: [2500000, 6000000, 5500000, 10000000, 3000000, 2500000]
            }]
        });
        //END linechart

        Highcharts.chart('barChart', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Payments in 2019'
            },
            xAxis: {
                categories: [
                    'I',
                    'II',
                    'III',
                    'IV',
                    'V',
                    'VI',
                    'VII',
                    'VIII',
                    'IX',
                    'X',
                    'XI',
                    'XII'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rupees'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">Std {point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>Rs. {point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Expected',
                data: [1000000, 1000000, 800000, 800000, 1500000, 1500000, 2000000, 2500000, 3000000, 3000000, 3000000, 3000000]

            }, {
                    name: 'Received',
                    data: [670000, 900000, 770000, 480000, 1000000, 1270000, 1670000, 1970000, 1670000, 2670000, 2000000, 1670000]

            }]
        });
        //End barchart

    }

})();