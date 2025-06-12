const productRepo = require("../repositories/productRepository");
const generateId = require("../utils/generateId");

async function getAll() {
  const products = await productRepo.getAll();
  return products;
}

async function getById(id) {
  const products = await productRepo.getAll();
  return products.find((product) => product.id === Number(id));
}

async function create(data) {
  const products = await productRepo.getAll();
  const newProduct = { id: await generateId(), ...data };
  products.push(newProduct);
  await productRepo.save(products);
  return newProduct;
}

async function remove(id) {
  const products = await productRepo.getAll();
  await productRepo.save(products.filter((p) => p.id !== Number(id)));
}

async function update(id, data) {
  const products = await productRepo.getAll();
  const index = products.findIndex((p) => p.id === Number(id));
  if (index === -1) {
    return null;
  }

  const updatedProduct = { ...products[index], ...data };
  products[index] = updatedProduct;

  await productRepo.save(products);
  return updatedProduct;
}

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
