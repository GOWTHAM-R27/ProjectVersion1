const express = require("express");
const userController=require("../controllers/users");
const router = express.Router();

router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/book',userController.book);
// router.post('/admin',userController.admin);
module.exports=router;