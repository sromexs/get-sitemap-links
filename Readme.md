## Installation

Using npm:

```shell
`npm i get-sitemap-links`
```

With Node.js:

```js
const GetSitemapLinks = require("get-sitemap-links)";

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
