module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
    dir: {
      input: 'src',
    },
  };
};
