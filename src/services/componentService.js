const Component = require("../models/Component");

const createComponent = async (data) => {
  return await Component.create(data);
};

const getAllComponents = async () => {
  return await Component.find();
};

const updateComponent = async (id, data) => {
  return await Component.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

const deleteComponent = async (id) => {
  return await Component.findByIdAndDelete(id);
};



module.exports = {
  createComponent,
  getAllComponents,
  updateComponent,
  deleteComponent
};

