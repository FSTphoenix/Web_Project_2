const mongoose = require("mongoose");
const componentService = require("../services/componentService");

const createComponent = async (req, res) => {
  try {
    const component = await componentService.createComponent(req.body);
    res.status(201).json(component);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllComponents = async (req, res) => {
  try {
    const components = await componentService.getAllComponents();
    res.json(components);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateComponent = async (req, res) => {
  // ✅ ID VALIDATION FIRST
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid component ID" });
  }

  try {
    const component = await componentService.updateComponent(
      req.params.id,
      req.body
    );

    if (!component) {
      return res.status(404).json({ message: "Component not found" });
    }

    res.json(component);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deleteComponent = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid component ID" });
  }

  try {
    const component = await componentService.deleteComponent(req.params.id);

    if (!component) {
      return res.status(404).json({ message: "Component not found" });
    }

    res.json({ message: "Component deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createComponent,
  getAllComponents,
  updateComponent,
  deleteComponent
};

