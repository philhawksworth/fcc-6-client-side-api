module.exports = function(config) {

  config.addPassthroughCopy("src/js");
  return  {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };

};
