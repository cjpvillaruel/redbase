const path = require("path");
const clients = [];
require("esbuild")
  .build({
    entryPoints: ["application.jsx"],
    bundle: true,
    outdir: path.join(process.cwd(), "app/assets/builds"),
    absWorkingDir: path.join(process.cwd(), "app/javascript"),
    // watch: true,
    loader: { ".js": "jsx" },
    banner: {
      js: ' (() => new EventSource("http://localhost:8082").onmessage = () => location.reload())();',
    },
    // custom plugins will be inserted is this array
    plugins: [],
    watch: {
      onRebuild(error) {
        clients.forEach((res) => res.write("data: update\n\n"));
        clients.length = 0;
        console.log(error ? error : "...");
      },
    },
  })
  .catch(() => process.exit(1));

require("http")
  .createServer((req, res) => {
    return clients.push(
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
        Connection: "keep-alive",
      })
    );
  })
  .listen(8082);
