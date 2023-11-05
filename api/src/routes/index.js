const { Router } = require("express");
const controllers = require("../controllers");
// const middlewares = require("../middlewares");

const router = Router();
// router.delete("/:id", controllers.deleteCharacter)
// router.put("/:id", middlewares.characterValidation, controllers.updateCharacter)
// router.get("/:id", controllers.getCharacterById); 
// router.get("/", controllers.userLogin);
router.get("/productsAll", controllers.productsAll);
router.post("/userLogin", controllers.userLogin);



module.exports = router;