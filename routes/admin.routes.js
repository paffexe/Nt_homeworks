const {
  login,
  findAll,
  create,
  findById,
  upadate,
  remove,
} = require("../controllers/admin.controller");

const router = require("express").Router();
const selfGuard = require("../middlewares/guards/admin-self.jwt.guard");
const adminJwtGuard = require("../middlewares/guards/admin-jwt.guard");
const adminTrueGuard = require("../middlewares/guards/admin-true.guard");

router.post("/", adminJwtGuard, adminTrueGuard, create);
router.post("/login", login);
router.get("/all", findAll);
router.get("/:id", adminJwtGuard, selfGuard, findById);
router.patch("/:id", upadate);
router.delete("/:id", remove);

module.exports = router;
