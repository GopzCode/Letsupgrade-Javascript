//QUESTION 3 & 4

let student=[
    {
        name:"Anu",
        age:20,
        country:"india",
        hobbies:["dancing","singing"],   
    },
    {
        name:"Rahul",
        age:35,
        country:"USA",
        hobbies:["Football","reading"],     
    },
    {
        name:"Raju",
        age:35,
        country:"india",
        hobbies:["cricket","reading"],     
    },
    {
        name:"anju",
        age:25,
        country:"india",
        hobbies:["reading","singing"],     
    }
];

    for (let i = 0; i < student.length; i++) {
        console.log(student[i]); 
    }

    var agefilter = student.filter(function(item){ return item.age < 30 });
    console.log(agefilter);

    var countryfilter = student.filter(function(item){ return item.country =="india" });
    console.log(countryfilter);

