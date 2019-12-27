export function formatData (data) {

    const formattedLabels = data.labels

    const formattedDatasets = data.datasets.map((dataset, index) => {
        const formatted = {
            label: dataset.label,
            data: dataset.data,
            backgroundColor: '#FFFFFF',
            borderColor: '#DDDDDD',
        }
        return formatted
    })

    const formattedData = {
        labels: formattedLabels,
        datasets: formattedDatasets
    }

    return formattedData
}

export function getPercentage (data) {
    const current = data.datasets[0].data[data.datasets[0].data.length - 1]
    const previous = data.datasets[0].data[data.datasets[0].data.length - 2]
    const percentage = Math.round( (current / previous) * 100 ) - 100
    return percentage
}

export function getAmount (data) {
    const current = data.datasets[0].data[data.datasets[0].data.length - 1]
    const previous = data.datasets[0].data[data.datasets[0].data.length - 2]
    const amount = '$' + (current - previous).toFixed(2)

    return amount
}

export function createConfig (type, data) {
    const formattedData = formatData(type, data)
    const config = {
        type: 'line',
        data: formattedData,
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            },
            tooltips: {
                enabled: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    }
    return config
}