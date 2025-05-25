const { createViewPage } = require("../helpers/create_view_page");
const Author = require("../schemas/Author");
const Dict = require("../schemas/Dict");
const topicsModel = require("../schemas/Topic");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render(createViewPage("index"), { title: "Asosiy sahifa", isHome: true });
});

router.get("/dictionary", async(req, res) => {
  let dicts = await Dict.find().lean()
  res.render(createViewPage("dictionary"), {
    title: "Lug'atlar",
    isDict: true,
    dicts,
  });
});

router.get("/authors", async(req, res) => {
  let authors = await Author.find().lean()
  res.render(createViewPage("authors"), {
    title: "Mualliflar",
    isAuthor: true,
    authors,
  });
});

router.get("/topics", async (req, res) => {
  let topics = await topicsModel.find().lean();
  res.render(createViewPage("topics"), {
    title: "Maqolalar",
    isTopic: true,
    topics,
  });
});

router.get("/login", (req, res) => {
  res.render(createViewPage("login"), {
    title: "Tizimga kirish",
    isLogin: true,
  });
});

module.exports = router;
