import axios from "axios";

/**
 * Options for GetSitemapLinks function
 * @property {string} [filterIndexes] - String to filter sitemap links by. If provided, only sitemap links that contain the specified string will be returned.
 * For example, if filterIndexes is set to "blog", only sitemap links containing the word "blog" in their URL will be included.
 */
type IOptions = {
  filterIndexes?: string;
};

/**
 * Fetches all links from a sitemap URL, including nested sitemaps.
 * @param {string} url - URL of the sitemap to fetch links from.
 * @param {IOptions} [options] - Optional configuration options for the function.
 * @returns {Promise<string[]>} - A promise that resolves with an array of all links found in the sitemap(s).
 */
const GetSitemapLinks = async (url: string, options: IOptions = {}): Promise<string[]> => {
  const regex = /(?<=<loc>)(.+?)(?=<\/loc>)/g;
  let indexes: string[] = [];
  let links: string[] = [];

  try {
    const { data } = await axios.get(url);
    indexes = [...new Set((data as string).match(regex) as string[])];
  } catch (err) {
    return [];
  }

  if (indexes.length === 0 || !indexes[0].endsWith(".xml")) {
    return indexes;
  }

  const { filterIndexes } = options;

  if (filterIndexes) {
    indexes = indexes.filter((e) => e.includes(filterIndexes));
  }

  await Promise.allSettled(
    indexes.map(async (index) => {
      try {
        const { data: indexData } = await axios.get(index);
        const array = indexData.match(regex) as string[] | null;
        if (array) links.push(...array);
      } catch (err) {}
    })
  );

  return [...new Set(links)];
};

export default GetSitemapLinks;
