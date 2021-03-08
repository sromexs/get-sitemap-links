## Get Sitemap Links

This tool get, fetch, crawl, sitemap pages recursively and fetch all links in between `<loc>` tag. This app created by typescript and usable in both node.js and typescript apps. I hope you enjoy working with this app.

## Installation

Using npm:

```shell
npm i get-sitemap-links
```

With Node.js:

```js
const GetSitemapLinks = require("get-sitemap-links").default;

(async () => {
  const array = await GetSitemapLinks(
    "https://nexload.ir/wp-sitemap-posts-post-1.xml"
  );
  console.log(array.length);
})();
```

With Typescript:

```typescript
import GetSitemapLinks from "get-sitemap-links";

(async () => {
  const array = await GetSitemapLinks(
    "https://nexload.ir/wp-sitemap-posts-post-1.xml"
  );
  console.log(array.length);
})();
```

## Options

```typescript
(async () => {
  const array = await GetSitemapLinks("https://nexload.ir/wp-sitemap.xml", {
    filterIndexes: "posts",
    // Here we say we just want indexes that includes "posts" string
    // This option only works when givin sitemap link is IndexPage like example.com/sitemap.xml
  });
  console.log(array.length);
})();
```
