<h1 align="center">
Get Sitemap Links
</h1>

<p align="center">
    <img width="400px" src="https://user-images.githubusercontent.com/48912836/111001692-7882b900-8399-11eb-8a79-2e869864ee0d.jpg" alt="get sitemap links"></img>
</p>

This tool get, fetch, crawl, sitemap pages recursively and fetch all links in between `<loc>` tag. This app created by typescript and usable in both node.js and typescript apps. I hope you enjoy working with this app.

## Installation

Using npm:

```shell
npm i get-sitemap-links
```

## Example

This is simple usage of the this tool we can get all links of the sitemap url :

```typescript
const array = await GetSitemapLinks(
  "https://example.com/sitemap.xml"
);

// Output :
// array = [
//      "https://example.ir/post/1",
//      "https://example.ir/post/2",
//      "https://example.ir/post/3",
//      "https://example.ir/post/4",
//      ...
//  ]
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
