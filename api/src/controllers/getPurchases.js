const { Purchases, Users } = require("../models");

module.exports = async (req, res) => {
  try {
    const allPurchases = await Purchases.findAll();
    if (allPurchases.length > 0) res.status(200).json(allPurchases);
  } catch (error) {
    res.status(506).json({ message: "Error interno del servidor" }, error);
  }
};
