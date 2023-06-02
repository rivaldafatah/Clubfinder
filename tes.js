// function makeTea(isCold) {
//     if (isCold) {
//       var tea = 'Make an Ice Tea!';
//     } else {
//       var tea = 'Make a Hot Tea!';
//     }
//     return tea;
//   }
   
//   console.log(makeTea(false));
//-------------------------------------
// const name = "john";

// console.log(name);

//-------------------------------------
// let fruits = ['apple', 'orange'];
// fruits = ['apple', 'orange', 'banana'];
 
// console.log(fruits);

// spreading operator
// const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
// const others = ['Cake', 'Pie', 'Donut'];
 
// const allFavorites = [...favorites, ...others];
 
// console.log(allFavorites);

async function reserveACoffee(type, miligrams) {
    try {
      const seeds = await getSeeds(type, miligrams);
      const coffee = await makeCoffee(seeds);
      const result = await servingToTable(coffee);
      console.log(result);
    } catch (rejectionReason) {
      console.log(rejectionReason);
    }
  }
   
  reserveACoffee('liberica', 80);