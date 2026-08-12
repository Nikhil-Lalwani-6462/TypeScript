import promptSync from "prompt-sync";

// 🎯 Final Challenge

// Don't look at the previous examples while solving this.

// Create:

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     inStock: boolean;
// }

// Then create these functions:

// Function 1
// getProductById(products: Product[], id: number): Product | undefined
// Function 2
// getAvailableProducts(products: Product[]): Product[]
// Function 3
// getProductNames(products: Product[]): string[]

interface Product
{
    id:number,
    name : string,
    price : number, 
    isBoolean : boolean
}
let products : Product[] = []
function addProduct(id:number, name:string, price:number, isBoolean : boolean)
{

    let prod : Product = 
    {
        id : id,
        name : name,
        price: price,
        isBoolean :  isBoolean
    }
    products.push(prod)
}
let input = promptSync();
let addprod:number = Number(input("How many products do you want to add in the list?"));
for(let index:number = 0 ; index < addprod; index++ )
    {
        let id = Number(input("Enter id for an product"));
        let name =  input("Enter name of product");
        let price = Number(input("Enter price for product:"))
        let choice = Boolean(input("Enter yes if product active else false"));
        let isBoolean = choice;
        
        addProduct(id,name,price,isBoolean);
    }


function getProductById(products:Product[],id : number) : Product | undefined
{
    let Prod : Product | undefined = products.find(p => p.id==id);
    return Prod;
}

let id = Number(input("Enter id to get the individual product:"))
let product = getProductById(products,id);
console.log("Individual Product:",product);


function getAvailableProducts(products : Product[]) : Product[]
{
    let prods = products.filter(p=>p.isBoolean == true);
    return prods 
}
let prods = getAvailableProducts(products)
console.log("Available Products:",prods)

function getProductNames(products : Product[]) : string[]
{
    var prodnames = products.map(p=>p.name)
    return prodnames;
}
let names = getProductNames(products)
console.log("Name of products :",names)


