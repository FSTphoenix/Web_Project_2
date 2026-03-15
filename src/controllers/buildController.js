const buildService = require("../services/buildService");

const checkBuild = async (req, res) => {
  try {
    const { componentIds } = req.body || {};

    if (!Array.isArray(componentIds) || componentIds.length === 0) {
      return res.status(400).json({
        message: "componentIds array is required"
      });
    }

    const result = await buildService.checkCompatibility(componentIds);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  checkBuild
};
