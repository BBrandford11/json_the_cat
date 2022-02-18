const request = require("request");

const fetchBreedDescription = function (breed, callback) {
  const wantedCat = breed.toLowerCase().substring(0, 3);

  const Url = `https://api.thecatapi.com/v1/breeds/search?q=${wantedCat}`;
  request(Url, (error, response, body) => {
    if (error) {
      callback(`Failed to request details. Details: `, null);
    }

    const data = JSON.parse(body); 

    if (!data[0]) {
      callback(undefined, undefined);
    } else {
      callback(undefined, data[0].description);
    }
  });
};

module.exports = fetchBreedDescription;
