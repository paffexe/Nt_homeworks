const {
  create,
  findById,
  findAll,
  upadate,
  remove,
} = require("../controllers/description.controller");

const router = require("express").Router();

router.post("/", create);
router.get("/all", findAll);
router.get("/:name", findById);
router.patch("/:id", upadate);
router.delete("/:id", remove);

module.exports = router;
