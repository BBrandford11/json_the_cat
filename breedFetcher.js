const request = require("request");
const args = process.argv.slice(2);
const wantedCat = args[0].toLowerCase().substring(0, 3);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${wantedCat}`,
  (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(`body is a `)
    // console.log(typeof body)
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
    //console.log(typeof data);
  }
);
