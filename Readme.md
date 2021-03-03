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
