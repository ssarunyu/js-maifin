function ProductManagement() {
  //add products variable here
  let products = []

  function getAllProducts() {
    return products
  }

  function addProduct(product) {
    products.push(product)
  }

  function searchByName(name) {
    return products.filter(pr => pr.name.toLowerCase() === name.toLowerCase())
  }

  function searchByPriceRange(minPrice, maxPrice) {
    return products.filter(pr => pr.price > minPrice && pr.price < maxPrice)
  }

  function removeAll() {
    products.splice(0, products.length)
  }

  return {
    getAllProducts,
    addProduct,
    searchByName,
    searchByPriceRange,
    removeAll
  }
}
module.exports = ProductManagement
const productCatalog = ProductManagement()
