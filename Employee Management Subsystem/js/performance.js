
  const ctxPie = document.getElementById('performancePieChart').getContext('2d');
   const performancePieChart = new Chart(ctxPie, {
     type: 'pie',
     data: {
       labels: ['Excellent', 'Good', 'Needs Improvement', 'Poor'],
       datasets: [{
         label: 'Performance Distribution',
         data: [40, 35, 15, 10],
         backgroundColor: ['#4caf50', '#ffeb3b', '#ff9800', '#f44336'],
         borderColor: '#ffffff',
         borderWidth: 2
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
               return tooltipItem.label + ': ' + tooltipItem.raw + '%';
             }
           }
         }
       }
     }
   });

   
   const ctxBar = document.getElementById('performanceBarChart').getContext('2d');
   const performanceBarChart = new Chart(ctxBar, {
     type: 'bar',
     data: {
       labels: ['Q1', 'Q2', 'Q3', 'Q4'],
       datasets: [{
         label: 'Performance Ratings',
         data: [4.5, 4.2, 4.8, 4.7],
         backgroundColor: '#3f51b5',
         borderColor: '#ffffff',
         borderWidth: 1
       }]
     },
     options: {
       responsive: true,
       scales: {
         y: {
           beginAtZero: true,
           max: 5
         }
       }
     }
   });


   document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    document.getElementById("success-message").style.display = "block"; // Show success message
  });