const express = require("express")
const router = express.Router()
const cardController=require("../controllers/cardControllers.js")


router.get("/menu", cardController.getAllMenu)
router.get("/menu/:id", cardController.getAllMenuById)
router.delete("/menu/:id", cardController.deleteMenu)
router.post("/menu", cardController.postMenu)
router.patch("/menu/:id", cardController.patchMenyu)



module.exports = router