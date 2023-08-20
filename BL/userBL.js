const productDal = require('../DAL/userDal')

let products = productDal.getProducts()

const getAllProducts = (req,res) => {
    return products
}

const getProductById = (req, res) => {
    const id = req.params.id;
    let selectedProduct = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === id) selectedProduct = products[i]
    }
    return selectedProduct
}

const addProduct = (req, res) => {
    const newProduct = req.body;
    products.push(newProduct)
    return products
}

const editProduct = (req, res) => {
    const id = req.params.id;
    const newInfo = req.body;
    let selectedProduct = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === id) selectedProduct = products[i];
    }
    selectedProduct = newInfo;
    selectedProduct.id = id;
     
}

const deleteProduct = (req, res) => {
    const id = req.params.id;
    let selectedProduct = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === id) deleteIndex = i;
    }
    products.splice(deleteIndex, 1);
    return products
}

const addQuantity = (req, res) => {
   const id = req.params.id;
   let selectedProduct = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === id) selectedProduct = products[i];
    }
    selectedProduct.quantity++;
    return products
}

const subQuantity = (req, res) => {
    const id = req.params.id;
   let selectedProduct = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === id) selectedProduct = products[i];
    }
    selectedProduct.quantity--;
    return products
}


module.exports = {getAllProducts} // add more exports!!! export all the funcs!
module.exports = {getProductById}
// module.exports = {addProduct};
// module.exports = {editProduct};
// module.exports = {deleteProduct};


