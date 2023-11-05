const { Router } = require("express");
const controllers = require("../controllers");


const router = Router();

router.get("/productsAll", controllers.productsAll);
router.post("/userLogin", controllers.userLogin);



module.exports = router;