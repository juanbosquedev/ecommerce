const { Purchases } = require("../models");

module.exports = async (req, res) => {
  try {

   const {userID} = req.params
    const purchase = await Purchases.findAll({
      where: {userID, },
    });
    if (purchase.length > 0) res.status(200).json(purchase);
    else res.status(200).send("Esperamos por tu pedido")
  } catch (error) {
    res.status(506).json({ message: "Error interno del servidor" }, error);
  }
};
