const {
  addCategory,
  findById,
  findAll,
  upadate,
  remove,
} = require("../controllers/category.controller");

const router = require("express").Router();

router.post("/", addCategory);
router.get("/all", findAll);
router.get("/:id", findById);
router.patch("/:id", upadate);
router.delete("/:id", remove);

module.exports = router;
