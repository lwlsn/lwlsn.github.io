module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};

eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./blog/**/*.md");
});
