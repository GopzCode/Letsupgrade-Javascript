window.onload = function () {
    let initialbus = [];
  
    if (localStorage.getItem("bus") == null) {
        let stringbuses=JSON.stringify(initialbus);
        console.log(stringbuses);
      localStorage.setItem("bus",stringbuses) ;
    }
  };
  
  function display(busarray = undefined) {
    let tabledata = "";
    let buses;
    if (busarray == undefined) {
      buses = JSON.parse(localStorage.getItem("bus"));
    } else {
      buses = busarray;
    }
  
    buses.forEach(function (bus, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.number}</td>
        <td>${bus.capacity}</td>
        <td>
        <button onclick='deletebus(${index})'>delete</button>
        </td>
        </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display();
  
  function addBus(e) {
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("num").value;
    let capacity = document.getElementById("capacity").value;
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number = number;
    bus.capacity = capacity;
  
    //   superheroes.push(superhero);
  
    let buses = JSON.parse(localStorage.getItem("bus"));
    buses.push(bus);
    localStorage.setItem("bus", JSON.stringify(buses));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("num").value = "";
    document.getElementById("capacity").value = "";
  }
  
  function searchBySource() {
    let searchValue = document.getElementById("searchsource").value;
    let buses = JSON.parse(localStorage.getItem("bus"));
    let newdata = buses.filter(function (bus) {
      return (
        bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  function searchByDest() {
    let searchValue = document.getElementById("searchDest").value;
    let buses = JSON.parse(localStorage.getItem("bus"));
    let newdata = buses.filter(function (bus) {
      return (
        bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deletebus(index) {
    let buses = JSON.parse(localStorage.getItem("bus"));
    buses.splice(index, 1);
    localStorage.setItem("bus", JSON.stringify(buses));
    display();
  }
  
  