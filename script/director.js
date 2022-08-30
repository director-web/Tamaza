const ctx = document.querySelector('#myChart').getContext("2d");

let delayed;

// Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58,123,213,1)");
gradient.addColorStop(1, "rgba(0,210,255,0.3)");


const labels = [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentabr',
    'Oktabr',
    'Noyabr',
    'Dekabr',
]

const data = {
    labels,
    datasets: [{
        data: [157268100, 172997000, 203626200, 206285900, 267297700, 296649600, 257488300, 360313900, 349260600, 364089000, 291675200, 260304500],
        label: 'ZAFAR AKA SHAXAR BIR YILLIK HISOBOT',
        fill: true,
        backgroundColor: gradient,
        borderColor: 'white',
        pointBackgroundColor: 'grey',
    }
    ]
}

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        radius: 4,
        hitRadius: 30,
        hoverRadius: 10,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
    },
}

const myChart = new Chart(ctx, config);



const ctxBar = document.getElementById('myChart-bar').getContext('2d');
const myChartBar = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['YANVAR', 'FEVRAL', 'MART', 'APREL', 'MAY', 'IYUN', 'IYUL', 'AVGUST', 'SENTABR', 'OKTABR', 'NOYABR', 'DEKABR'],
        datasets: [{
            label: 'TAMAZA-FROZEN MCHJ OBOROT',
            data: [70000000, 80000000, 100000000, 45000000, 95000000, 150000000],
            backgroundColor: [
                'rgba(255, 99, 132, .2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        radius: 5,
        pointHitRadius: 30,
        hoverRadius: 10,
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});



