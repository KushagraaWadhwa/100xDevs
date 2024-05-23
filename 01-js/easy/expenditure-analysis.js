/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an empty object to store the total spent per category
  let categoryTotals = {};

  // Loop through each transaction
  for (const transaction of transactions) {
    const category = transaction.category; // Get the category of the transaction
    const price = transaction.price; // Get the price of the transaction

    // If the category is already in the object, add the price to its total
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      // If the category is not in the object, set its total to the transaction's price
      categoryTotals[category] = price;
    }
  }

  // Convert the totals object into an array of objects
  const result = [];
  for (const category in categoryTotals) {
    result.push({ category: category, totalSpent: categoryTotals[category] });
  }

  return result;
}

 



module.exports = calculateTotalSpentByCategory;
