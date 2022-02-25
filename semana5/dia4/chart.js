const contenedorBarChart = document.querySelector('#bar-chart').getContext("2d")
const containerDoughnutChart = document.querySelector('#doughnut-chart').getContext("2d")
const containerLinealChart = document.querySelector('#lineal-chart')
const containerBubbleChart = document.querySelector('#bubble-chart')
const containerPolarChart = document.querySelector('#polar-chart')
const containerRadarChart = document.querySelector('#radar-chart')
const containerScatterChart = document.querySelector('#scatter-chart')

const barChar = new Chart(contenedorBarChart,{
    type: "bar",
    data:{
        labels: [
            "lunes",
            "Martes",
            "Miercoles",
            "jueves",
            "viernes",
            "sabado",
            "domingo",        
        ],
        datasets: [{
            label: "numeros de usuarios al día",
            data:[20,40,10,100,70,66,23],
            borderWidth: 2,
            borderColor: "#f01",
            backgroundColor: ["#456","#125","#789","#753","#159","#1245","#8956"],
            color: "#147", 
        }]
    }
})


const dataForChart = {
    labels:['computadoras','celulares','refrigeradoras','Parlantes'],
    datasets: [{
        label: "Productos electronicos",
        data: [3,20,15,80],
        backgroundColor:["orange","#156","green","red"]
    }]
}



const config ={
    type: "doughnut",
    data: dataForChart,
}
const donutChart = new Chart(containerDoughnutChart, config)


const configLineal ={
    type: "line",
    data: dataForChart,
}

const lineChart = new Chart(containerLinealChart, configLineal)


dataForChart.datasets[0].data =[
    {
        x:30,
        y:10,
        r:50,
    },
    {
        x:50,
        y:25,
        r:60,
    }
    ,
    {
        x:10,
        y:20,
        r:40,
    }
]


const configbubble = {
    type: "bubble",
    data: dataForChart,
}

const bubblechart = new Chart(containerBubbleChart, configbubble)

dataForChart.datasets[0].data = [30,96,19,60]

const configPolar = {
    type: "polarArea",
    data: dataForChart,
}

const polarChart = new Chart(containerPolarChart, configPolar)


const configRadar = {
    type: "radar",
    data: dataForChart,
}

const radarChart = new Chart(containerRadarChart, configRadar)


dataForChart.datasets[0].data=[
    {
        x: -10,
        y:0,
    },
    {
        x: 0,
        y:-10,
    },
    {
        x: 10,
        y:5,
    },

]


const configScatter = {
    type: "scatter",
    data: dataForChart,
}

const scatterChart = new Chart (containerScatterChart, configScatter)