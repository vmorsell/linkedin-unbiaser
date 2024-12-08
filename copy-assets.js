const fs = require("fs");

fs.copyFileSync("manifest.json", "dist/manifest.json");
fs.copyFileSync("popup.html", "dist/popup.html");
fs.copyFileSync("styles.css", "dist/styles.css");
fs.copyFileSync("linkedin-icon.png", "dist/linkedin-icon.png");
