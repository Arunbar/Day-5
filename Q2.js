// For loop
let objs = [
    {
      Title: "Loop Task",
      name: "Person",
      age: "100",
      mobile: "1234567890",
    },
  ];
  for (let i = 0; i < objs.length; i++) {
    if (objs[i]["name"] === "arun") {
      console.log(JSON.stringify(objs[i]));
    }
  }
  
  //ForIn Loop
  let loopIn = `[{"Title":"ForIn Loop","Format":"JSON","Id value":"96543"}]`;
  let obje = JSON.parse(loopIn);
  for (let keys in obje) {
    if (obje[keys]["Format"] === "JSON") console.log(JSON.stringify(obje[keys]));
  }
  

  //  ForOf Loop 
  
  let ofLoop = `[{"Title":"ForOf Loop","sum":"03","Id":984301}]`;
  let obj = JSON.parse(ofLoop);
  for (let value of obj) {
    if (value["sum"] === "03") console.log(JSON.stringify(value));
  }
  

  //  ForEach Loop 
  
  let json = `[{"Title":"ForEach Loop","sum":"04","Id":87432}]`;
  let jsonObj = JSON.parse(json);
  jsonObj.forEach((value) => {
    if (value["Id"] === 9876543210);
    console.log(JSON.stringify(value));
  });
  
 
