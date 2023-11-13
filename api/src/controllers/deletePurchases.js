// const { Purchases, Users } = require("../models");

// module.exports = async (req, res) => {
  
//     try {
//         const usuarioId = req.params.usuarioId;
//         const purchase = await Purchases.destroy({
//           where: { usuarioId },
//         });
//         res.status(200).send(purchase);
//       } catch (error) {
//         res.status(506).json({ message: "Error interno del servidor" }, error);
//       }
// };