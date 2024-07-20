/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(employee=>{
    if(employee.profession=="developer"){
      console.log(employee)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee=>{
    if(employee.profession=="developer"){
      console.log(employee)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmp={ id: 4, name: "gangaram", age: "21", profession: "unemployed" };
  arr.push(newEmp)
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter(employee=>employee.profession!=="admin")
   console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray=[

    { id: 5, name: "shree", age: "17", profession: "manager" },
    { id: 6, name: "ramya", age: "29", profession: "HR" },
    { id: 7, name: "gautam", age: "49", profession: "CEO" },

  ]

  let concatArray=arr.concat(newArray);
  console.log(concatArray)
}


