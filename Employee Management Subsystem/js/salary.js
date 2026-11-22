
document.getElementById('salaryForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    
    const employeeId = document.getElementById('employeeId').value;
    const employeeName = document.getElementById('employeeName').value;
    const baseSalary = parseFloat(document.getElementById('baseSalary').value);
    const bonus = parseFloat(document.getElementById('bonus').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
   
    const totalSalary = baseSalary + bonus - deductions;
  
   
    const table = document.getElementById('salaryTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
  
    newRow.innerHTML = `
      <td>${employeeId}</td>
      <td>${employeeName}</td>
      <td>$${baseSalary.toFixed(2)}</td>
      <td>$${bonus.toFixed(2)}</td>
      <td>$${deductions.toFixed(2)}</td>
      <td>$${totalSalary.toFixed(2)}</td>
    `;
  
    document.getElementById('salaryForm').reset();
  });
  
  
      