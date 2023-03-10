module.exports = eleventyConfig => {
  eleventyConfig.addPairedShortcode('accordion', function(content, title, id = '') {
    return `
<details class="accordion">
  <summary class="accordion__summary" ${id ? 'id="' + id + '"' : ''}>
    <h2>${title}</h2>
  </summary>
  <div class="accordion__text">
    ${content}
  </div>
</details>`
  })

  eleventyConfig.addPairedShortcode('founder', (content, name, position, photo) => {
    return `
<div class="founder">
  <picture>
    <source srcset="${photo}.webp, ${photo}2x.webp 2x" type="image/webp">
    <img alt="${name}" class="founder__photo" src="${photo}2x.jpg" loading="lazy">
  </picture>
  <div class="founder__info">
    <h2 class="founder__name">${name}</h2>
    <span class="founder__position">${position}</span>
    <div class="founder__description">${content}</div>
  </div>
</div>
    `
  })
}
