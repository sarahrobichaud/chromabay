const fs = require("fs");
const path = require("path");

// Example: Adjust asset paths after build
const distDir = path.resolve(__dirname, "dist");
const files = fs.readdirSync(distDir);

files.forEach((file) => {
  const filePath = path.join(distDir, file);
  let content = fs.readFileSync(filePath, "utf-8");
  content = content.replace(/\/assets\//g, "./assets/");
  fs.writeFileSync(filePath, content);
});
