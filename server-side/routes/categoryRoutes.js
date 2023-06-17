const CategoryController = require("../controllers/categoryController");
const { authentication } = require("../middlewares/auth");
const router = require("express").Router();

router.get("/", CategoryController.getCategories);

router.post("/", authentication, CategoryController.createCategory);

router.put("/:id", authentication, CategoryController.editCategory);

router.delete("/:id", authentication, CategoryController.deleteCategory);

module.exports = router;
