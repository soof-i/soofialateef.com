module.exports = function(eleventyConfig) {

  // Copy static assets to the output folder
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/*.webp");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};