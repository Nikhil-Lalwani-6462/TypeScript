import promptSync from "prompt-sync";
let products = [];
function addProduct(id, name, price, isBoolean) {
    let prod = {
        id: id,
        name: name,
        price: price,
        isBoolean: isBoolean
    };
    products.push(prod);
}
let input = promptSync();
let addprod = Number(input("How many products do you want to add in the list?"));
for (let index = 0; index < addprod; index++) {
    let id = Number(input("Enter id for an product"));
    let name = input("Enter name of product");
    let price = Number(input("Enter price for product:"));
    let choice = Boolean(input("Enter yes if product active else false"));
    let isBoolean = choice;
    addProduct(id, name, price, isBoolean);
}
function getProductById(products, id) {
    let Prod = products.find(p => p.id == id);
    return Prod;
}
let id = Number(input("Enter id to get the individual product:"));
let product = getProductById(products, id);
console.log("Individual Product:", product);
function getAvailableProducts(products) {
    let prods = products.filter(p => p.isBoolean == true);
    return prods;
}
let prods = getAvailableProducts(products);
console.log("Available Products:", prods);
function getProductNames(products) {
    var prodnames = products.map(p => p.name);
    return prodnames;
}
let names = getProductNames(products);
console.log(names);
