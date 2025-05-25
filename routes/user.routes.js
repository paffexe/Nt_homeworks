const {
  create,
  findById,
  findAll,
  upadate,
  remove,
  login,
} = require("../controllers/user.controller");

const router = require("express").Router();
const selfGuard = require("../middlewares/guards/user-self.jwt.guard")
const userJwtGuard = require("../middlewares/guards/user-jwt.guard")
const adminJwtGuard = require("../middlewares/guards/admin-jwt.guard");
const adminTrueGuard = require("../middlewares/guards/admin-true.guard");


router.post("/", adminJwtGuard, adminTrueGuard, create);
router.get("/all", findAll);
router.get("/:id", userJwtGuard, selfGuard, findById);
router.post("/login/:id", login)
router.patch("/:id", upadate);
router.delete("/:id", remove);

module.exports = router;
