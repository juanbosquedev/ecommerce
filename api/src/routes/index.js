const { Router } = require("express");
const {userLogin, userPurchese, productsAll} = require("../controllers");


const router = Router();

router.post("/userLogin", userLogin);
router.post("/userPurchese", userPurchese);
router.get("/productsAll", productsAll);




module.exports = router;