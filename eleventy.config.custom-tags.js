module.exports = eleventyConfig => {
  eleventyConfig.addPairedShortcode("accordion", function(content, title, id = '') {
    return `<details class="accordion">
  <summary class="accordion__summary" ${id ? 'id="' + id + '"' : ''}>
    ${title}
  </summary>
  <div class="accordion__text">
    ${content}
  </div>
</details>`
  })
}