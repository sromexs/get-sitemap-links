import axios from "axios";

type IOptions = {
  filterIndexes?: string;
};

const GetSitemapLinks = async (url: string, options: IOptions = {}) => {
  try {
    const hostname = new URL(url).hostname.replace(".", "\\.");
    const regex = new RegExp(`https?:\/\/${hostname}.+?(?=<\/loc>)`, "gmi");

    const { data } = await axios.get(url);

    let indexes = [...new Set((data as string).match(regex) as string[])];

    if (indexes.length === 0 || !indexes[0].endsWith(".xml")) {
      return indexes;
    }

    const { filterIndexes } = options;

    if (filterIndexes) {
      indexes = indexes.filter((e) => e.includes(filterIndexes));
    }

    let links: string[] = [];

    for (const index of indexes) {
      try {
        const indexData = (await axios.get(index)).data as string;
        const array = indexData.match(regex) as string[] | null;
        if (array) links.push(...array);
      } catch (err) {}
    }

    return [...new Set(links)];
  } catch (err) {
    return [];
  }
};

export default GetSitemapLinks;
