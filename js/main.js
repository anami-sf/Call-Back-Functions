// function add(a, b) {
//     return a + b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function compute(a, b, op) {
//     return op(a, b);
//   }
  
//   let result1 = compute(10, 5, add);
//   let result2 = compute(10, 5, subtract);
//     console.log('result1: ', result1)  
//     console.log('result2: ', result2)

// const cars = [
//     { make: 'Toyota', yrsOld: 5, mileage: 92399 },
//     { make: 'Ford', yrsOld: 12, mileage: 255005 },
//     { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
//     { make: 'Subaru', yrsOld: 9, mileage: 111266 },
//     { make: 'Toyota', yrsOld: 2, mileage: 41888 },
//     { make: 'Tesla', yrsOld: 3, mileage: 57720 }
//   ];

//   const usedCars = cars.filter((car) => {
//       return car.mileage > 20000
//   })

//   console.log('usedCards array: ', usedCars)

//   usedCars.forEach(() => {console.log(cars)})

//   // Synchronous function
// function getFriends() {
//     return ['Fred', 'Barney'];
//   }
  
//   // Get the friends
//   let friends = getFriends();
  
//   // The friends array is ready to work with because getFriends
//   // is synchronous and returned the array of friends we wanted 
//   friends.forEach(function(friend) {
//     console.log(friend);
//   });

  // asynchronous function
// function getFriendsAsync(cb) {
//     // Using setTimeout to make getFriendsAsync
//     // behave like a long-running database operation
//     setTimeout(function() {
//       return ['Fred', 'Barney'];
//     }, 0);
//   }
  
//   // Will friends have an array after this line of code runs?
//   let friends = getFriendsAsync();
  
//   getFriendsAsync(function(frieds) {
//       console.log(friends);
//   })

function step1(cb) {
    setTimeout(function() {
      console.log('STEP 1 COMPLETE');
      cb()
    }, 750);
  }
  
  function step2(cb) {
    setTimeout(function() {
      console.log('STEP 2 COMPLETE');
      cb()
    }, 500);
  }
      
  function step3(cb) {
    setTimeout(function() {
      console.log('STEP 3 COMPLETE');
      cb()
    }, 250);
  }

  function fetch (){
    console.log('Finished!')
  }
  

step1(function(){
    step2(function(){
        step3(fetch)
    })
})