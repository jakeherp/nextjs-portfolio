const request = require("request");

server.get("/user-profile", (req, res) => {
  request(
    "https://www.behance.net/v2/users/jakeherp/projects/?api_key=Hvz37g2VCwNq7NLdPSdr4ITJOSN7QyAz",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body));
      }
    }
  );
});
