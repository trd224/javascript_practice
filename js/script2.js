//qus: Write a function deepClone that takes an object as input and returns a deep clone of that object.
// The deep clone should include all nested objects and arrays, such that modifications to the clone 
//do not affect the original object, and vice versa. Ensure that the function works for objects of any 
//depth and handles circular references gracefully.

  // const originalObject = {
  //   name: 'John',
  //   age: 30,
  //   address: {
  //     city: 'New York',
  //     zip: '10001'
  //   },
  //   hobbies: ['reading', 'traveling']
  // };
  
  // const clonedObject = deepClone(originalObject);
  // clonedObject.name = 'Alice';
  // clonedObject.address.city = 'Los Angeles';
  // clonedObject.hobbies.push('painting');
  
  // console.log(originalObject);
  // console.log(clonedObject);

  //-----------------------------------------------------------------------


  const originalObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    },
    hobbies: ['reading', 'traveling']
  };

  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      // If obj is null or not an object, return it as is
      return obj;
    }
  
    // Create a new object or array to hold the cloned properties
    const clone = Array.isArray(obj) ? [] : {};

    //console.log(clone);
  
    // // Iterate over each property of the original object
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Recursively clone nested objects and arrays
        clone[key] = deepClone(obj[key]);
      }
    }
  
    return clone;
  }


  const clonedObject = deepClone(originalObject)

  clonedObject.name = 'Alice';
  clonedObject.address.city = 'Los Angeles';
  clonedObject.hobbies.push('painting');

  console.log(originalObject);
  console.log(clonedObject);
