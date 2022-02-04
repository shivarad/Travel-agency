import React, { useEffect, useState } from "react";
import { Resort } from "../../interfaces";
import { sortArrayOfObjects } from "../../utils";
import ResortsList from "../../components/resortsList/resortsList";
import Data from "../../data";
import SearchBox from "../../components/searchBox/searchBox";
import Select from "../../components/select/select";

const Resorts = () => {
  const [resorts, setResorts] = useState<Resort[] | null>(Data);
  const [searchTerm, setSearchTerm] = useState<string>("");
const[priceRange,setPriceRange]=useState<string>("none");
const[PriceFilterdData,setPriceFilteredData]=useState<Resort[]|null>(null);

  useEffect(() => {
    if (resorts !== null) {
      
      const filteredData = Data.filter((item) =>
        item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
      setResorts(filteredData);
    }
  }, [searchTerm]);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  };

  const SortSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (resorts !== null) {
      const data = priceRange&&PriceFilterdData?[...PriceFilterdData]:[...resorts];
      let filterd=null;
      switch (value) {
        case "title": {
          filterd=
            sortArrayOfObjects(data, value as keyof Resort, "ascending")
          
          break;
        }
        case "price": {
          filterd = data.sort(
            (a, b) =>
              parseInt(a.price.substring(0, a.price.length)) -
              parseInt(b.price.substring(0, b.price.length))
          );
         
          break;
        }

        default: {
          break;
        }
      }
      priceRange&&PriceFilterdData&&filterd?setPriceFilteredData(filterd):setResorts(filterd)
    }
  };

  const PriceSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const Price = event.target.value;
    setPriceRange(Price);
    if (resorts !== null) {
      const data = [...resorts]
      const Range = Price.split("-");
      const filter = data.filter(
        (item) =>
          parseInt(item.price.substring(0, item.price.length)) >=
            parseInt(Range[0]) &&
          parseInt(item.price.substring(0, item.price.length)) <
            parseInt(Range[1])
      );
      setPriceFilteredData(filter);
    }
  };

  return (
    <>
      <div style={{ height: "200px", margin: "20px" }}>
        <SearchBox onChange={handleSearch} />
        <Select
          Hint="Filter by price"
          onSelectChange={PriceSelectChange}
          Options={[
            { title: "0-500", value: "0-500" },
            { title: "500-700", value: "500-700" },
            { title: "700-1000", value: "700-1000" },
            { title: "1000-2000", value: "1000-2000" },
            { title: "2000-3000", value: "2000-3000" },
          ]}
        />
        <Select
          Hint="Sort By"
          onSelectChange={SortSelectChange}
          Options={[
            { title: "Price", value: "price" },
            { title: "Title", value: "title" },
          ]}
        />
      </div>
      <ResortsList resorts={ priceRange==="none"?resorts:PriceFilterdData} />
    </>
  );
};

export default Resorts;
