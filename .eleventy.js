module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/*.webp");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};