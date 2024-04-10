module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });
  eleventyConfig.addPassthroughCopy("src/assets/images");

  return {
    dir: {
      input: 'src',
    },
  };
};
