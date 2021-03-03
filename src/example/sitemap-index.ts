import GetSitemapLinks from "../index";

(async () => {
  const array = await GetSitemapLinks("https://nexload.ir/wp-sitemap.xml", {
    filterIndexes: "posts", // Here we say we just want indexes that includes this string
  });
  console.log(array.length);
})();
