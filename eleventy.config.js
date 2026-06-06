export default function(eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("resources");
  eleventyConfig.addPassthroughCopy("styles.css");
  // eleventyConfig.addPassthroughCopy("resources/pixel_operator/PixelOperator.ttf");
  // eleventyConfig.addPassthroughCopy("resources/pixel_operator/PixelOperator-Bold.ttf");
  // eleventyConfig.addPassthroughCopy("resources/pixel_operator/PixelOperatorMono.ttf");
  // eleventyConfig.addPassthroughCopy("resources/pixel_operator/PixelOperatorMono-Bold.ttf");
  // eleventyConfig.addPassthroughCopy("resources/DaydreamRegular.woff2");
  // eleventyConfig.addPassthroughCopy("resources/DotGothic16-Regular.ttf");
  eleventyConfig.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./blog/*.md")].reverse()
  });

  const enDate = new Intl.DateTimeFormat("en");
  eleventyConfig.addFilter("enDate", function(d) {
  	return enDate.format(d);
  });
};