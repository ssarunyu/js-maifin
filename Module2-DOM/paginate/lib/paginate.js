function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  const totalPage = Math.ceil(allItems.length / rowsPerPage)
  const itemsInCurrentPage = allItems.slice(rowsPerPage * (currentPage - 1), rowsPerPage * (currentPage - 1) + rowsPerPage)
  console.log("All items:", allItems)
  console.log("Rows per page:", rowsPerPage)
  console.log("now total page:", totalPage)
  console.log("Page and Items in page:", currentPage, itemsInCurrentPage)
  return itemsInCurrentPage
}

function getTotalPages(allItems, rowsPerPage) {
  // Total Pages
  return Math.ceil(allItems.length / rowsPerPage)
}

// ES Module
export { getItemsOfCurrentPage, getTotalPages}