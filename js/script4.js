// que: Given an array of objects, write a function groupBy that groups the objects by a specified key.
 //The function should return an object where the keys are the values of the specified key, 
 //and the values are arrays of objects that share that key value.

  // const data = [
  //   { id: 1, category: 'fruits', name: 'Apple' },
  //   { id: 2, category: 'fruits', name: 'Banana' },
  //   { id: 3, category: 'vegetables', name: 'Carrot' },
  //   { id: 4, category: 'fruits', name: 'Orange' },
  //   { id: 5, category: 'vegetables', name: 'Broccoli' }
  // ];
  
  // console.log(groupBy(data, 'category'));

  // output:
  // {
  //   fruits: [
  //     { id: 1, category: 'fruits', name: 'Apple' },
  //     { id: 2, category: 'fruits', name: 'Banana' },
  //     { id: 4, category: 'fruits', name: 'Orange' }
  //   ],
  //   vegetables: [
  //     { id: 3, category: 'vegetables', name: 'Carrot' },
  //     { id: 5, category: 'vegetables', name: 'Broccoli' }
  //   ]
  // }

  //----------------------------------------------------------------------------+

  const data = [
    { id: 1, category: 'fruits', name: 'Apple' },
    { id: 2, category: 'fruits', name: 'Banana' },
    { id: 3, category: 'vegetables', name: 'Carrot' },
    { id: 4, category: 'fruits', name: 'Orange' },
    { id: 5, category: 'vegetables', name: 'Broccoli' }
  ];

  const result = {};

  data.forEach(item => {
    //console.log(item)
    for(key in item){
      //console.log(key)
      if(key == 'category'){
        console.log(item[key]);
        let value = item[key];
        if(!result[value]){
          result[value] = [];
        }
        result[value].push(item);
        
        
      }
    }
  })

  console.log(result);

  //-----------------------------------------------------------------

  ////other solution

  // const result = {};

  // data.forEach(item => {
  //   const category = item.category;
  //   console.log(category)

  //   if(!result[category]){
  //     result[category] = []
  //   }
  //   result[category].push(item);


  // })

  // console.log(result)

  //-------------------------------------------------------------------

  //more info

//   code 1

//   if (!result[value]) {
//     result[value] = [];
// }
// result[value].push(item);



// code2 

// if (!result[value]) {
//   result[value] = [];
// } else {
//   result[value].push(item);
// }

// In Code 1, the current item is pushed into the array regardless of whether the array already existed or not.
// In Code 2, the current item is only pushed into the array if the array already existed. This means the first item for each category will not be pushed into the array, because the array was just created.

