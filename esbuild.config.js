const path = require('path');

require("esbuild").build({
  entryPoints: ["application.jsx"],
  bundle: true,
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  watch: true,
  loader: { ".js": "jsx" },
  // custom plugins will be inserted is this array
  plugins: [],
}).catch(() => process.exit(1));
