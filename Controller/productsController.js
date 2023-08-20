const productBL = require('../BL/userBL');

const AllProducts = (req, res) => {
    const products = productBL.getAllProducts()
    return products
}

const prodById = (req, res) => {
    const chosenProduct = productBL.getProductById()
    return chosenProduct
}

module.exports = {AllProducts};
module.exports = {prodById};

