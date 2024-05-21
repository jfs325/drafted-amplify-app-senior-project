import { ChartData } from 'chart.js';

const revenueBreakdown = [
    { name: 'Victory IPA Brew', total_units_sold: 10000 },
    { name: 'Fierce Apple IPA', total_units_sold: 13050 },
    { name: 'Citrus Bliss IPA', total_units_sold: 7700 },
    { name: 'Midnight Lavender Stout', total_units_sold: 18330 },
    { name: 'Alpine Breeze Pale Ale', total_units_sold: 9800 },
]

const totalSales = [
    {key: 'Jan', value: 2500}, 
    {key: 'Feb', value: 2800}, 
    {key: 'Mar', value: 3000}, 
    {key: 'Apr', value: 5100}, 
    {key: 'May', value: 1900},
    {key: 'Jun', value: 2200},
    {key: 'Jul', value: 2650}
];

// work in progress
const salesByBeer = [
    { name: 'Victory IPA Brew', units_sold: 10000, month: 'Jan' },
    { name: 'Fierce Apple IPA', units_sold: 13050, month: 'Jan' },
    { name: 'Citrus Bliss IPA', units_sold: 7700, month: 'Jan' },
    { name: 'Midnight Lavender Stout', units_sold: 18330, month: 'Jan' },
    { name: 'Alpine Breeze Pale Ale', units_sold: 9800, month: 'Jan' },
]

const salesOverTime: ChartData <'line', {key: string, value: number} []> = {
    datasets: [{
        data: totalSales,
        parsing: {
            xAxisKey: 'key',
            yAxisKey: 'value'
        },
        label: 'Sales Over Time',
    }],
};

const beerRevenueBreakdown: ChartData <'pie'> = {
    datasets: [{
        data: revenueBreakdown.map(item => item.total_units_sold),
    }],
    labels: revenueBreakdown.map(item => item.name)
};

// work in progress
const monthlySalesByBeer: ChartData <'line', {name: string, units_sold: number, month: string } []> = {
    datasets: [{
        data: salesByBeer,
        parsing: {
            xAxisKey: 'month',
            yAxisKey: 'units_sold'
        },
    }],
};

export { salesOverTime, beerRevenueBreakdown, monthlySalesByBeer }