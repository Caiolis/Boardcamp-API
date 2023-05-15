export function validateGameSchema(gameSchema) {
  return (req, res, next) => {
    const { name, image, stockTotal, pricePerDay } = req.body;
    const validation = gameSchema.validate(
      {
        name,
        image,
        stockTotal,
        pricePerDay,
      },
      { abortEarly: false }
    );
    if (validation.error) {
      const errors = validation.error.details.map((d) => d.message);
      return res.status(400).send(errors);
    }
    next();
  };
}
