import GetSitemapLinks from "../index";

(async () => {
  const array = await GetSitemapLinks(
    "https://nexload.ir/wp-sitemap-posts-post-1.xml"
  );
  console.log(array.length);
})();
