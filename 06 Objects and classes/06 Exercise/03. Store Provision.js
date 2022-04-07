function solve(arr1, arr2) {
  let available = {};
  for (let index = 0; index < arr1.length; index += 2) {
      let product = arr1[index]
      available[product] = Number(arr1[index + 1])

  }

  for (let i = 0; i < arr2.length; i += 2) {
      let needed = arr2[i]

      if (!available.hasOwnProperty(needed)) {
          available[needed] = 0;

      }
      available[needed] += Number(arr2[i + 1]);
  }
  for (const needed in available) {
      console.log(`${needed} -> ${available[needed]}`)

  }
  // sort by value
  let entries = Object.entries(available).sort((a,b) =>{
      return a[1]-b[1]
  })
  entries.forEach(el=>{
      console.log(el);
  })
  
}




solve([
  'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
  [
      'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
  ])