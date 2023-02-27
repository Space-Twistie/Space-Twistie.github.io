module.exports = eleventyConfig => {
  eleventyConfig.addPairedShortcode("accordion", function(content, title) {
    return `<details class="accordion">
  <summary class="accordion__summary">
    ${title}
  </summary>
  <div class="accordion__text">
    ${content}
  </div>
</details>`
  })
}