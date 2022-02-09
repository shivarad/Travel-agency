import { Resort } from "./interfaces";

export const sortArrayOfObjects = <T>(
  data: T[],
  keyToSort: keyof T,
  direction: "ascending" | "descending" | "none"
) => {
  if (direction === "none") {
    return data;
  }
  const compare = (objectA: T, objectB: T) => {
    const valueA = objectA[keyToSort];
    const valueB = objectB[keyToSort];

    if (valueA === valueB) {
      return 0;
    }

    if (valueA > valueB) {
      return direction === "ascending" ? 1 : -1;
    } else {
      return direction === "ascending" ? -1 : 1;
    }
  };

  return data.slice().sort(compare);
};

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

export const SortData = (data: Resort[] | null, type: string) => {
  console.log(type)
  if (data === null) return null;
  let filtered = [...data];
  switch (type) {
    case "title": {
      filtered = sortArrayOfObjects(filtered, type as keyof Resort, "ascending");

      break;
    }
    case "price": {
      console.log("hi")
      filtered = filtered.sort(
        (a, b) =>
          parseInt(a.price.substring(0, a.price.length)) -
          parseInt(b.price.substring(0, b.price.length))
      );
      console.log(filtered.map(item=>item.price))
      break;
    }

    default: {
      break;
    }
  }
  return filtered;
};
