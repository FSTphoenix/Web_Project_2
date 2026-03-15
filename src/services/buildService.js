const Component = require("../models/Component");

const checkCompatibility = async (componentIds) => {
  const components = await Component.find({
    _id: { $in: componentIds }
  });

  const cpu = components.find(c => c.type === "CPU");
  const motherboard = components.find(c => c.type === "Motherboard");
  const ram = components.find(c => c.type === "RAM");
  const gpu = components.find(c => c.type === "GPU");

  const issues = [];

  // CPU ↔ Motherboard
  if (cpu && motherboard) {
    if (cpu.specs.socket !== motherboard.specs.socket) {
      issues.push("CPU socket does not match motherboard socket");
    }
  }

  // RAM ↔ Motherboard
  if (ram && motherboard) {
    if (ram.specs.ramType !== motherboard.specs.ramType) {
      issues.push("RAM type is incompatible with motherboard");
    }

    if (ram.specs.speed > motherboard.specs.maxRamSpeed) {
      issues.push("RAM speed exceeds motherboard supported speed");
    }
  }

  // PSU estimation
  const totalPower =
    components.reduce((sum, c) => sum + (c.powerDraw || 0), 0) + 100;

  return {
    compatible: issues.length === 0,
    issues,
    estimatedPower: totalPower
  };
};

module.exports = {
  checkCompatibility
};
