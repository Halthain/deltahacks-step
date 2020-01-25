const radar = require('radar-sdk-js');
var pubKey = "prj_test_pk_959afab33af777346ab1896c114f2cd2dc6c7368";
radar.initialize(pubKey);
const express = require('express');
const app = express();
var http = require('http');
var router = express.Router();

module.exports = (app) => {



    app.get("https://api.radar.io/v1/", function(req, response) {
        var pubKey = "prj_test_pk_959afab33af777346ab1896c114f2cd2dc6c7368";

        var website = "https://api.radar.io/v1/";
        var options = {
            method: "GET",
            headers: {
                "X-Auth-Token": pubKey
            }
        };

        let data = "";

        let apiRequest = http.request(website, options, function(res) {
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
}