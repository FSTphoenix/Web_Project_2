const { body } = require("express-validator");

const createComponentValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("type")
    .isIn(["CPU", "GPU", "Motherboard", "RAM", "Storage", "PSU", "Case"])
    .withMessage("Invalid component type"),

  body("price")
    .isNumeric()
    .withMessage("Price must be a number"),

  body("powerDraw")
    .isNumeric()
    .withMessage("Power draw must be a number"),

  body("performanceScore")
    .isNumeric()
    .withMessage("Performance score must be a number"),

  body("specs")
    .notEmpty()
    .withMessage("Specs are required")
];

module.exports = {
  createComponentValidator
};


