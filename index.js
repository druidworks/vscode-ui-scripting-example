const program = require("commander");
const addComponent = require("./methods/addComponent");

program.version("0.0.1").description("Project Assistant");

program
  .command("addComponent <path> <name> [additionalFiles]")
  .alias("a")
  .description("Add a component")
  .action(function(path, name, additionalFiles) {
    addComponent(path, name, additionalFiles);
  });

program.parse(process.argv);
