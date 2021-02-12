export default {
  cornerRadius: 100,
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    position: 'bottom',
  },
  tooltips: {
    backgroundColor: '#fff',
    bodyFontColor: '#000',
    borderColor: 'rgba(0, 0, 0,0.1)',
    borderWidth: 1,
    cornerRadius: 10,
    titleFontColor: '#000',
  },
  layout: {
    padding: {
      top: 60,
    },
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          minRotation: 0,
        },
      },
    ],
    xAxes: [{
      ticks: {
        fontStyle: 'bold',
      },
      gridLines: {
        display: false,
      },
    }],
  },
}
