const { Router } = require("express");
const controllers = require("../controllers");


const router = Router();

router.post("/userLogin", controllers.userLogin);
router.post("/userPurchese", controllers.userPurchese);
router.get("/productsAll", controllers.productsAll);




module.exports = router;