//Que: Given two arrays of objects, each containing key-value pairs, write a function findIntersection 
//to find the intersection of the two arrays based on a specific key. The intersection should contain 
//objects that exist in both arrays, based on the specified key.

  // const arr1 = [
  //   { id: 1, name: 'John' },
  //   { id: 2, name: 'Alice' },
  //   { id: 3, name: 'Bob' }
  // ];
  
  // const arr2 = [
  //   { id: 2, name: 'Alice' },
  //   { id: 3, name: 'Charlie' },
  //   { id: 4, name: 'David' }
  // ];
  
  // console.log(findIntersection(arr1, arr2, 'id'));

  // output:
  // [
  //   { id: 2, name: 'Alice' },
  //   { id: 3, name: 'Bob' }
  // ]


  //-------------------------------
  const arr1 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
  ];
  
  const arr2 = [
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' }
  ];
  
  const result = findIntersection(arr1, arr2);

 function findIntersection(arr1, arr2){
    const result = arr1.filter(obj1 => {
      return arr2.some(obj2 => {
        return obj2.name == obj1.name
      })
    })
    
 }

 console.log(result);