void function() {


  // traffic line charts
  const trafficCanvas = document.getElementById("traffic-chart");

  // data for line charts
  const traffic = {
    hourly: {
      labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
      data: [10, 12, 10, 9, 0, 15, 12, 18, 3, 9, 4]
    },
    daily: {
      labels: ["30", "31", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      data: [50, 120, 100, 75, 200, 175, 125, 185, 25, 50, 150]
    },
    weekly: {
      labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
    },
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov"],
      data: [7750, 9000, 6700, 7000, 4250, 3500, 3000, 6000, 5250, 6500, 8000]
    },


  };

  // data for the line charts
  let trafficData = {
    labels: traffic.weekly.labels,
    datasets: [{
      label: '# of Hits',
      data: traffic.weekly.data,
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
    animation: {
      duration: 0
    },
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
        label: '# of Hits',
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

  const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
      ]
    }]
  };

  const mobileOptions = {
    legend: {
      position: 'right',
      reverse: true,
      labels: {
        boxWidth: 20,
        padding: 15,
        fontSize: 14,
        fontStyle: 'bold'
      }
    },
    layout: {
      padding: 15
    },
    rotation: 0
  }


  let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
  });

  // event listeners for graph selector
  const trafficLinks = document.querySelector(".traffic-nav");
    trafficLinks.addEventListener('click', e => {
      const active = document.querySelector(".traffic-nav-link.active");
      const pressed = e.target;

      if (active != pressed && pressed.tagName === 'LI') {
        const text = e.target.textContent.toLowerCase();
        active.classList.remove("active");
        pressed.classList.add("active");

        // update traffic data
        trafficChart.data.labels = traffic[text].labels;
        trafficChart.data.datasets[0].data = traffic[text].data;
        trafficChart.update();
      }

    })
  
}();
