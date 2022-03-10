const path = require('path')

module.exports = {
  images: {
    domains: ['bit.ly', 'images.unsplash.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
