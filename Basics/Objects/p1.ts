// create a product object with:

// id
// name
// price
// category
// inStock 

// Print the product name.
// Increase the price by ₹1000.
// Add a property brand.
// Delete category.
// Print the final object.

let product = {
    id:1,
    name:"CRM",
    price: 200,
    category : "Software",
    inStock : true
}

console.log(product.name);
product.price += 1000;
console.log("After Update:", product);


let updateProduct = {
    ...product,
    brand :  "BussinessEase"
};
console.log("After adding brand in obj")
console.log(updateProduct);




