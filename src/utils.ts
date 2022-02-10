import { Resort } from "./interfaces";

export const filterByTitle = (data: Resort[], searchTerm: string) => {
  const filteredData = data.filter((item) =>
    item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return filteredData;
};

export const filterByPrice = (data: Resort[], priceRange: string) => {
  const Range = priceRange.split("-");
  const filter = data.filter(
    (item) =>
      parseInt(item.price.substring(0, item.price.length)) >=
        parseInt(Range[0]) &&
      parseInt(item.price.substring(0, item.price.length)) < parseInt(Range[1])
  );
  return filter;
};

export const sortData = (data: Resort[] | null, type: string) => {
  if (data === null) return null;
  let filtered = [...data];
  switch (type) {
    case "+title": {
      filtered = filtered.sort((a,b)=>a.title>b.title?1:-1)

      break;
    }
    case "-title": {
      filtered = filtered = filtered.sort((a,b)=>a.title>b.title?-1:1)

      break;
    }
    case "+price": {
      filtered = filtered.sort(
        (a, b) =>
          parseInt(a.price.substring(0, a.price.length)) -
          parseInt(b.price.substring(0, b.price.length))
      );
      break;
    }
    case "-price": {
      filtered = filtered.sort(
        (a, b) =>
          parseInt(b.price.substring(0, b.price.length)) -
          parseInt(a.price.substring(0, a.price.length))
      );
      break;
    }
    default: {
      break;
    }
  }
  return filtered;
};
