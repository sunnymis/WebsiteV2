const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sunnymistry/Documents/Code/PersonalWebsite2016/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/sunnymistry/Documents/Code/PersonalWebsite2016/src/pages/index.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/sunnymistry/Documents/Code/PersonalWebsite2016/src/pages/work.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/sunnymistry/Documents/Code/PersonalWebsite2016/src/pages/blog.js")))
}

