let data = require("../data/data.json");

const getAllArticles = (req, res) => {
  res.status(200).json(data);
};

const createArticle = (req, res) => {
  console.log("create:", req.body);
  const { userId, id, title, body } = req.body;
  const newArticle = {
    userId,
    id,
    title,
    body,
  };
  data.push(newArticle);
  res.status(201).json({ message: "article created successfully" });
};

const updateArticle = (req, res) => {
  const { title, body } = req.body;
  console.log(title, body);
  data.forEach((article) => {
    if (article.id == req.params.id) {
      article.title = title;
      article.body = body;
      return;
    }
  });
  res
    .status(200)
    .json({ message: ` article with ${req.params.id} updated successfully` });
};

const deleteArticle = (req, res) => {
  const newData = data.filter((article) => {
    return article.id != req.params.id;
  });
  data = newData;
  res.status(200).json({ message: `deleting ${req.params.id}` });
};

module.exports = {
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
