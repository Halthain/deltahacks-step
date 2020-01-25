app.get("/api/:term", function(req, response) {
  var apiKey = "*****************************************";

  let url = "http://api.football-data.org/v2/competitions/CL/matches";
  var options = {
    method: "GET",
    headers: {
      "X-Auth-Token": apiKey
    }
  };

  let data = "";

  let apiRequest = http.request(url, options, function(res) {
    console.log("Connected");

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      console.log("data collected");

      response.end(JSON.stringify(data));
    });
  });

  apiRequest.end();
});

        var website = "https://api.radar.io/v1/";
        app.get("/api/location", function(req, res, next) {
                var pubKey = "prj_test_pk_959afab33af777346ab1896c114f2cd2dc6c7368";
                var options = {
                    method: 'GET',
                    uri: website,
                    headers: {
                        'X-Auth-Token': pubKey
                    }
                };

                var data = "";

                var getReq = http.request(options, function(res) {
                    console.log("Connected");
                    res.on('data', chunk => {
                        data += chunk;
                    });

                    res.on("end", () => {
                        console.log("data collected");
                        response.end(JSON.stringify(data));
                    });

                    getReq.end();

                })

            }
        }