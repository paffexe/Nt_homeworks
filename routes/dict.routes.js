const { addDict, findAll, findByterm, findByLet, remove } = require("../controllers/dict.controller");
const authorExpertGuard = require("../middlewares/guards/author-expert.guard");
const authorJwtGuard = require("../middlewares/guards/author-jwt.guard");

const router = require("express").Router();

router.post("/",  addDict); //authorJwtGuard, authorExpertGuard,
router.get("/all", findAll);
router.get("/term", findByterm);
router.get("/let", findByLet);
router.delete("/:id", remove)

module.exports = router;
