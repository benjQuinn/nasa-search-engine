import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  }
  return axios
    .get(`https://images-api.nasa.gov/search?q=${query}`)
    .then((res) => {
      const imageResults = res.data.collection.items;
      const images = imageResults
        .filter((item) => item.data[0].media_type === "image")
        .map((image) => image.links[0].href);
      console.log(images);
      return images;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getImages;
