const API_BASE = "http://localhost:8080/api";

const cpuSelect = document.getElementById("cpu");
const motherboardSelect = document.getElementById("motherboard");
const ramSelect = document.getElementById("ram");
const gpuSelect = document.getElementById("gpu");
const resultDiv = document.getElementById("result");
const checkBtn = document.getElementById("checkBtn");

// Load components on page load
async function loadComponents() {
  const res = await fetch(`${API_BASE}/components`);
  const components = await res.json();

  components.forEach(c => {
    const option = document.createElement("option");
    option.value = c._id;
    option.textContent = c.name;

    if (c.type === "CPU") cpuSelect.appendChild(option);
    if (c.type === "Motherboard") motherboardSelect.appendChild(option);
    if (c.type === "RAM") ramSelect.appendChild(option);
    if (c.type === "GPU") gpuSelect.appendChild(option);
  });
}

checkBtn.addEventListener("click", async () => {
  const componentIds = [
    cpuSelect.value,
    motherboardSelect.value,
    ramSelect.value,
    gpuSelect.value
  ].filter(Boolean);

  const res = await fetch(`${API_BASE}/build/check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ componentIds })
  });

  const data = await res.json();

  if (!data.compatible) {
    resultDiv.innerHTML = `
      ❌ Incompatible Build <br>
      Issues: ${data.issues.join(", ")}
    `;
  } else {
    resultDiv.innerHTML = `
      ✅ Compatible Build <br>
      Estimated Power: ${data.estimatedPower}W
    `;
  }
});

loadComponents();
