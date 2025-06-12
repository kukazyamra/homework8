const fsPromise = require("fs/promises");
const dbLocation = "./data/products.json";

async function getAll() {
  const data = await fsPromise.readFile(dbLocation, "utf8");
  return JSON.parse(data);
}

async function save(data) {
  await fsPromise.writeFile(dbLocation, JSON.stringify(data, null, 2));
}

module.exports = {
  getAll,
  save,
};
