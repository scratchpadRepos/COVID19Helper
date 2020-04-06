#!/usr/bin/env node

const init = require("./init-package-json");

// TODO: use an arg parser
const yes =
  process.argv.includes("--yes") || process.argv.includes("-y");

const all =
  process.argv.includes("--all") || process.argv.includes("-a");

const help =
  process.argv.includes("--help") || process.argv.includes("-h");

if (help) {
  console.log("create-react-babel")
  console.log("options:");
  console.log("--yes, -y\t", "skip prompts and use defaults for everything");
  console.log("--all, -a\t", "show prompts for non-React/Babel options");
  console.log("--help, -h\t", "print help message");
  process.exit(0)
}

init(process.cwd(), "", { yes: yes, all: all }, function(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("\n\nYour React build system is ready to go!\n\nNow run:\n");
  console.log("  ⚡️ Install dependencies:");
  console.log("     npm install\n");
  console.log("  🚦 Production build:");
  console.log("     npm run build\n");
  console.log("  🚧 Development build (watcher):");
  console.log("     npm run dev\n");
});

