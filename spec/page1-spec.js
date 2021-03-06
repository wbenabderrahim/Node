var request = require("request");
var helloWorld = require("../index.js")
var base_url = "http://localhost:1400/"

describe("test1", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("test2", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toContain("Welcome to your app");
        done();
      });
    });
  });
});