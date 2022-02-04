import React, { useState } from "react";
import { Resort } from "../../interfaces";
import { sortArrayOfObjects } from "../../utils";
import ResortsList from "../../components/resortsList/resortsList";
import Data from "../../data";
import SearchBox from "../../components/searchBox/searchBox";
import Select from "../../components/select/select";

const Resorts = () => {
  const [resorts, setResorts] = useState<Resort[]>(Data);
  const [filterdResorts, setFilderedResorts] = useState<Resort[]>(Data);
  //const [sortOption, setSortOption] = useState("none");

  const SortSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    //setSortOption(value);
    switch (value) {
      case "none": {
        setResorts(Data);
        break;
      }
      case "title": {
        setResorts(
          sortArrayOfObjects(Data, value as keyof Resort, "ascending")
        );
        break;
      }
      case "price": {
        setResorts(
          Data.sort(
            (a, b) =>
              parseInt(a.price.substring(0, a.price.length)) -
              parseInt(b.price.substring(0, b.price.length))
          )
        );
        break;
      }

      default:
        break;
    }
  };

  const PriceSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const Price = event.target.value;
    console.log(Price);
    if (Price !== "none") {
      console.log("if");
      const Range = Price.split("-");
      const filter = filterdResorts.filter(
        (item) =>
          parseInt(item.price.substring(0, item.price.length)) >=
            parseInt(Range[0]) &&
          parseInt(item.price.substring(0, item.price.length)) <
            parseInt(Range[1])
      );
      console.log(filter)
      setFilderedResorts(filter);
    }
  };

  //   const PriceRange=(data:Resort[])=>{
  //     const prices=data.map(item=>parseInt(item.price.substring(0,item.price.length)));
  //     const min=Math.min(...prices);
  //     const max=Math.max(...prices);
  //     const Range= [...Array(Math.floor(((max-min)/500))+1).keys()].map(x => (x * 500) + min);

  //   }
  return (
    <>
      <div style={{ height: "200px", margin: "20px" }}>
        <SearchBox data={filterdResorts} setData={setFilderedResorts} />
        <Select
          onSelectChange={PriceSelectChange}
          Options={[
            { title: "filter by price", value: "none" },
            { title: "0-500", value: "0-500" },
            { title: "500-700", value: "500-700" },
            { title: "700-1000", value: "700-1000" },
            { title: "1000-2000", value: "1000-2000" },
            { title: "2000-3000", value: "2000-3000" },
          ]}
        />
        <Select
          onSelectChange={SortSelectChange}
          Options={[
            { title: "Sort By", value: "none" },
            { title: "Price", value: "price" },
            { title: "Title", value: "title" },
          ]}
        />
      </div>
      <ResortsList resorts={resorts} />
    </>
  );
};

export default Resorts;
