const { Purchases } = require("../models");

module.exports = async (req, res) => {
  try {

   const {userID} = req.params
   console.log(userID, " soy user id")
    const purchase = await Purchases.findAll({
      where: {userID, },
    });
    res.status(200).send(purchase);
  } catch (error) {
    console.log(error, " error purchase by id")
    res.status(506).json({ message: "Error interno del servidor" }, error);
  }
};
