document.addEventListener("DOMContentLoaded", function() {
    var students = [
      { id: 07206497, name: "Danielle Joy Casquejo", courseYear: "Information Technology - Year 2" },
      { id: 07203032, name: "Rea Buates", courseYear: "Information Technology - Year 2" },
      { id: 07203996, name: "Angelique Secretario", courseYear: "Information Technology - Year 2" },
    ];

    var tableBody = document.getElementById("studentTableBody");
    students.forEach(function(student) {
      var row = tableBody.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = student.id;
      cell2.innerHTML = student.name;
      cell3.innerHTML = student.courseYear;
    });
  });
  
  function printStudentList() {
    alert("Printing student list...");
  }