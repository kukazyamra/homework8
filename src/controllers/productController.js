const productService = require("../service/productService");
const { constants } = require("http2");

async function getAll(req, res) {
  try {
    const products = await productService.getAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.sendStatus(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR);
  }
}

async function getById(req, res) {
  try {
    const product = await productService.getById(req.params.id);
    if (!product) {
      return res.sendStatus(constants.HTTP_STATUS_NOT_FOUND);
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.sendStatus(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR);
  }
}

async function create(req, res) {
  try {
    const newProduct = await productService.create(req.validatedBody);
    res.status(constants.HTTP_STATUS_CREATED).json(newProduct);
  } catch (error) {
    console.error(error);
    res.sendStatus(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR);
  }
}

async function remove(req, res) {
  try {
    await productService.remove(req.params.id);
    res.sendStatus(constants.HTTP_STATUS_NO_CONTENT);
  } catch (error) {
    console.error(error);
    res.sendStatus(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR);
  }
}

async function update(req, res) {
  try {
    const updated = await productService.update(
      req.params.id,
      req.validatedBody
    );
    if (!updated) return res.sendStatus(constants.HTTP_STATUS_NOT_FOUND);
    res.status(200).json(updated);

    return updated;
  } catch (error) {
    console.error(error);
    res.sendStatus(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR);
  }
}
module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
