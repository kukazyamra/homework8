const productRepo = require("../repositories/productRepository");

async function generateId() {
  const products = await productRepo.getAll();
  if (products.length === 0) {
    return 1;
  }

  const maxId = products.reduce(
    (max, item) => (item.id > max ? item.id : max),
    0
  );
  return maxId + 1;
}

module.exports = generateId;
