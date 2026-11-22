
 function addAttendanceRecord(event) {
    event.preventDefault();

    const employeeID = document.getElementById("attendanceEmployeeID").value;
    const employeeName = document.getElementById("attendanceEmployeeName").value;
    const date = document.getElementById("attendanceDate").value;
    const status = document.getElementById("attendanceStatus").value;
    const clockIn = document.getElementById("attendanceClockIn").value || '-';
    const clockOut = document.getElementById("attendanceClockOut").value || '-';

    const table = document.getElementById("attendanceTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
      <td>${employeeID}</td>
      <td>${employeeName}</td>
      <td>${date}</td>
      <td>${status}</td>
      <td>${clockIn}</td>
      <td>${clockOut}</td>
    `;

    document.getElementById("attendanceForm").reset();
  }


