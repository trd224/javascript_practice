//que: Given an array of objects where each object may contain nested arrays or objects, 
//write a function flattenArray to flatten the array to a single level, preserving the original 
//order of elements. Ensure that the function works for arrays of any depth.

//  const inputArray = [
//     { id: 1, name: 'John', children: [{ id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }] },
//     { id: 4, name: 'Emily', children: [{ id: 5, name: 'Charlie' }] },
//     { id: 6, name: 'David' }
//   ];


// output: 
//   [
//     {"id": 1,"name": "John"},
//     {"id": 2,"name": "Alice"},
//     {"id": 3,"name": "Bob"},
//     {"id": 4,"name": "Emily"},
//     {"id": 5,"name": "Charlie"},
//     {"id": 6,"name": "David"}
// ]

// code: 
// function flattenArray(arr) {
//     const result = [];
  
//     function flattenHelper(obj) {
//       if (Array.isArray(obj)) {
//         obj.forEach(flattenHelper);
//       } else if (typeof obj === 'object' && obj !== null) {
//         result.push(obj);
//         Object.values(obj).forEach(flattenHelper);
//       }
//     }
  
//     arr.forEach(flattenHelper);
//     return result;
//   }

//-----------------------------------------------------------------------------------------------

// const inputArray = [
//     { id: 1, name: 'John', children: [{ id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }] },
//     { id: 4, name: 'Emily', children: [{ id: 5, name: 'Charlie' }] },
//     { id: 6, name: 'David' }
//   ];

  // const result = [];
  // inputArray.forEach((item) => {
  //   let o = {};
  //   o.id = item.id;
  //   o.name = item.name;
  //   result.push(o);
    
  //   if(item.children && Array.isArray(item.children)){
  //       item.children.forEach((innerItem) => {
  //           let o2 = {};
  //           o2.id = innerItem.id;
  //           o2.name = innerItem.name;
  //           result.push(o2);
  //       })
  //   }
  // })

  // console.log(result);

  //---------------------------------------------------------------------------


  // const inputArray = [
  //   { id: 1, name: 'John', children: [{ id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }] },
  //   { id: 4, name: 'Emily', children: [{ id: 5, name: 'Charlie' }] },
  //   { id: 6, name: 'David' }
  // ];


  // const result = [];
  // const helper = (obj) => {
  //   //console.log(obj);
  //   if(typeof obj === 'object' && obj !== null){
  //     result.push(obj);
  //     for(const key in obj){
  //       if(obj.hasOwnProperty(key) && Array.isArray(obj[key])){
  //         //console.log(obj[key])
  //         obj[key].forEach(helper);
  //       }
  //     }
      
  //   }
  // }

  // inputArray.forEach(helper)


  // console.log(result)

  //------------------------------------------------------------------------

   const inputArray = [
    { id: 1, name: 'John', children: [{ id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }] },
    { id: 4, name: 'Emily', children: [{ id: 5, name: 'Charlie' }] },
    { id: 6, name: 'David' }
  ];

  const result = [];

  function helper(obj){
    let o = {};
    o.id = obj.id;
    o.name = obj.name;

    result.push(o);

    for(let key in obj){
        if(Array.isArray(obj[key])){
            obj[key].forEach(helper)
        }
    }
  }

  inputArray.forEach(helper)

  console.log(result);