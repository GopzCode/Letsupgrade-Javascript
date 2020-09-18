let employees = [
    {
      name: "Arjun",
      age: 22,
      city: "Ernakulam",
      salary: 10000,
    },
    {
        name: "Thomas",
        age: 26,
        city: "Chennai",
        salary: 50000,
    },
    {
        name: "Vyga",
        age: 22,
        city: "Banglore",
        salary: 10000,
    },
    {
        name: "Vyshakh",
        age: 30,
        city: "Banglore",
        salary: 10000,
    },{
        name: "Ganga",
        age: 25,
        city: "Ernakulam",
        salary: 15000,
    },
  ];
  
  function display(emparray) {
    let tabledata = "";
  
    emparray.forEach(function (employee, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.city}</td>
      <td>${employee.salary}</td>
      <td>
      <button onclick='deleteemployee(${index})'>delete</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display(employees);
  
  function addEmployee(e) {
    e.preventDefault();
    let employee = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = Number(salary);
  
    employees.push(employee);
  
    display(employees);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
  }
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = employees.filter(function (employee) {
      return (
        employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
  
    let newdata = employees.filter(function (employee) {
      return (
        employee.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deleteemployee(index) {
    employees.splice(index, 1);
    display(employees);
  }
  
  
  
 