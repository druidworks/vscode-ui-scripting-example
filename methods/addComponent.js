const fs = require("fs");
const changeCase = require("change-case");
const path = require("path");

function addComponent(componentPath, componentName, additionalFiles) {
  if (componentName !== "." && additionalFiles !== ".") {
    const actualPath = path.resolve(componentPath);
    const target = fs.lstatSync(actualPath);
    if (target.isDirectory()) {
      const componentDir = path.join(
        actualPath,
        changeCase.pascalCase(componentName)
      );
      fs.mkdirSync(componentDir);
      const componentDirTarget = fs.lstatSync(componentDir);
      if (componentDirTarget.isDirectory()) {
        fs.writeFileSync(
          path.join(componentDir, changeCase.camelCase(componentName) + ".js")
        );
        if (additionalFiles) {
          const files = additionalFiles.split(",");
          for (var i = 0; i < files.length; i++) {
            fs.writeFileSync(path.join(componentDir, files[i]));
          }
        }
      }
    }
  } else {
    console.log("no properties passed.");
  }
}

module.exports = addComponent;
