var http = require("http");
var fs = require("fs");


var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

    case "/":
      return displayHome(path, req, res);
    case "/favorite_foods":
      return displayFavoriteFoods(path, req, res);
    case "/favorite_movies":
      return displayFavoriteMovies(path, req, res);
    case "/favorite_CSS_frameworks":
      return displayFavoriteCSSFrameworks(path, req, res);
    default:
      return display404(path, req, res);
  };
};

function displayHome(url, req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

function displayFavoriteFoods(url, req, res) {
  fs.readFile(__dirname + "/foods.html", function(err, data) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
});
};

function displayFavoriteMovies(url, req, res) {
  fs.readFile(__dirname + "/movies.html", function(err, data) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
});
};

function displayFavoriteCSSFrameworks(url, req, res) {
  fs.readFile(__dirname + "/frameworks.html", function(err, data) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
});
};
