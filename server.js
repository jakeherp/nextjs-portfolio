const express = require("express");
const next = require("next");
const routes = require("./routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);
const request = require("request");

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/api/user-profile", (req, res) => {
      request(
        "https://www.behance.net/v2/users/jakeherp/projects/?api_key=Hvz37g2VCwNq7NLdPSdr4ITJOSN7QyAz",
        function(error, response, body) {
          if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
          }
        }
      );
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(handle).listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
