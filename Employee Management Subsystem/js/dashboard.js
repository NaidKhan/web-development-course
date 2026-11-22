
var ctxPie = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Excellent', 'Good', 'Average', 'Poor'],
    datasets: [{
      data: [30, 40, 20, 10],
      backgroundColor: ['#28a745', '#ffc107', '#17a2b8', '#dc3545'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw + "%";
          }
        }
      }
    }
  }
});


var ctxBar = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Performance Score',
      data: [80, 85, 75, 90, 88, 92],
      backgroundColor: '#007bff',
      borderColor: '#0056b3',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});