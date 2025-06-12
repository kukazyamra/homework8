const { z } = require("zod");

const productSchema = z
  .object({
    name: z.string().min(1),
    price: z.number().positive(),
    stock: z.number().int().nonnegative(),
    category: z.string().min(1),
  })
  .strict();

function validateProduct(req, res, next) {
  const result = productSchema.safeParse(req.body);

  if (!result.success) {
    const errors = {};
    for (const err of result.error.errors) {
      errors[err.path.join(".")] = err.message;
    }
    return res.status(400).json({ errors });
  }
  req.validatedBody = result.data;
  next();
}

module.exports = validateProduct;
