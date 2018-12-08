void function() {


  // traffic line charts
  const trafficCanvas = document.getElementById("traffic-chart");

  // data for the line charts
  let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      label: '# of Votes',
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderColor: '#7477BF',
      borderWidth: 1,
      lineTension: 0,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5
    }]
  };

  let trafficOptions = {
    aspectRatio: 2.5,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
    legend : {
      display: false
    }
  };

  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });

  // daily traffic bar chart
  const dailyCanvas = document.getElementById("daily-chart");

  // data for daily traffic bar chart
  const dailyData =  {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Votes',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
  };

  const dailyOptions = {
    scales: {
      xAxes: [{
        barPercentage: 0.7
      }],
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
    legend : {
      display: false
    }
  }

  let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions

  });

  // mobile user doughnut chart
  const mobileCanvas = document.getElementById("mobile-chart");

  let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

  });

}();
