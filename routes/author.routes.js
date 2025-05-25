const {
  loginAuthor,
  logoutAuthor,
  findAll,
  create,
  findById,
  upadate,
  remove,
  refreshAuthorToken,
  authorActivate,
} = require("../controllers/author.controller");

const authorJwtGuard = require("../middlewares/guards/author-jwt.guard");
const authorSelfGuard = require("../middlewares/guards/author-self.jswt.guard");

const router = require("express").Router();

router.post("/", create);
router.post("/login", loginAuthor);
router.post("/logout", logoutAuthor);
router.post("/refresh", refreshAuthorToken)
router.get("/all", findAll);
router.get("/:id", authorJwtGuard, authorSelfGuard, findById);
router.get("/activate/:link", authorActivate);
router.patch("/:id", upadate);
router.delete("/:id", remove);

module.exports = router;
