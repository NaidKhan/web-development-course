 
 var ctxPie = document.getElementById('pieChart').getContext('2d');
 var pieChart = new Chart(ctxPie, {
   type: 'pie',
   data: {
     labels: ['Leadership Training', 'Technical Workshop', 'Team Building'],
     datasets: [{
       label: 'Training Sessions',
       data: [60, 25, 15],
       backgroundColor: ['#ffab00', '#28a745', '#007bff'],
       borderColor: ['#ffffff', '#ffffff', '#ffffff'],
       borderWidth: 2
     }]
   }
 });

 
 var ctxBar = document.getElementById('barChart').getContext('2d');
 var barChart = new Chart(ctxBar, {
   type: 'bar',
   data: {
     labels: ['Leadership Training', 'Technical Workshop', 'Team Building'],
     datasets: [{
       label: 'Sessions per Month',
       data: [8, 6, 4],
       backgroundColor: ['#ffab00', '#28a745', '#007bff'],
       borderColor: ['#ffffff', '#ffffff', '#ffffff'],
       borderWidth: 2
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

















    // Function to export the table data as a CSV file
    function exportTrainingReport() {
        const table = document.querySelector(".training-records table");
        let csvContent = "";
    
        // Loop through each row
        for (let i = 0; i < table.rows.length; i++) {
          const row = table.rows[i];
          const rowData = [];
    
          // Loop through each cell in the row
          for (let j = 0; j < row.cells.length; j++) {
            rowData.push(row.cells[j].textContent);
          }
    
          // Join the row data into a string separated by commas
          csvContent += rowData.join(",") + "\n";
        }
    
        // Create a Blob from the CSV content
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    
        // Create a download link
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "training_records.csv";
        link.click();
      }
    
      // Attach event listeners to buttons
      document.querySelector(".btn-add").addEventListener("click", addTrainingRecord);
      document.querySelector(".btn-export").addEventListener("click", exportTrainingReport);