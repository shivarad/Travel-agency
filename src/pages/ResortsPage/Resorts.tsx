import React, { useEffect, useState } from "react";
import {
  FilterBar,
  PageWrapper,
  PaginationButton,
  PaginationWrapper,
} from "./ResortsStyles";
import { Resort } from "../../interfaces";
import { sortArrayOfObjects } from "../../utils";
import ResortsList from "../../components/resortsList/resortsList";
import Data from "../../data";
import SearchBox from "../../components/searchBox/searchBox";
import Select from "../../components/select/select";
import CustomBtn from "../../components/CustomBtn/CustomBtn";

const Resorts = () => {
  const [resorts, setResorts] = useState<Resort[] | null>(Data);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("none");
  const [sortType, setSortType] = useState<string>("none");

  /***********pagination states************************************************************************* */
  const [currentPage, setCurentPage] = useState(0);
  const itemsPerPage = 20;
  const [currentPageItems, setCurrentPageItems] = useState<any[]>([]);
  const totalPages = resorts ? Math.ceil(resorts.length / itemsPerPage) : 0;

  const nextPage = () => {
    if (currentPage !== totalPages - 1 && totalPages !== 0)
      setCurentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 0 && totalPages !== 0) setCurentPage(currentPage - 1);
  };
  useEffect(() => {
    if (resorts)
      setCurrentPageItems(
        resorts?.slice(currentPage, currentPage + itemsPerPage)
      );
  }, [currentPage, resorts]);

 
  /**************************************************************************************************** */

  useEffect(() => {
    if (priceRange !== "none") filterData();
  }, [priceRange]);

  const SortData = (data: Resort[] | null, type: string) => {
    if (data === null) return null;
    let filtered = [...data];
    switch (type) {
      case "title": {
        filtered = sortArrayOfObjects(data, type as keyof Resort, "ascending");

        break;
      }
      case "price": {
        filtered = data.sort(
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
    return filtered;
  };
  /*****************filter functions****************************************** */

  const resetFilter=()=>{
    setSearchTerm("");
    setSortType("none");
    setPriceRange("none");
    setResorts(Data);
  }

  const filterByTitle = (data: Resort[]) => {
    const filteredData = data.filter((item) =>
      item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    return filteredData;
  };

  const filterByPrice = (data: Resort[]) => {
    const Range = priceRange.split("-");
    const filter = data.filter(
      (item) =>
        parseInt(item.price.substring(0, item.price.length)) >=
          parseInt(Range[0]) &&
        parseInt(item.price.substring(0, item.price.length)) <
          parseInt(Range[1])
    );
    return filter;
  };

  const filterData = () => {
    let filteredData = null;
    if (priceRange !== "none") filteredData = filterByPrice(Data);
    if (searchTerm !== "")
      filteredData = filterByTitle(filteredData ? filteredData : Data);
    if (sortType !== "none")
      filteredData = SortData(filteredData ? filteredData : Data, sortType);
    setResorts(filteredData);
  };

  /************event handlers*********************************************************************** */
  
  const SortSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortT = event.target.value;
    setSortType(sortT);
    setResorts(SortData(resorts, sortT));
  };

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSearchTerm(e.target.value);
  };

  const PriceSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const priceTerm = event.target.value;
    setPriceRange(priceTerm);
    //useEffect
  };

  return (
    <PageWrapper>
      <FilterBar>
        <SearchBox value={searchTerm} onChange={handleSearchChange} handleClick={filterData} />
        <Select
          Hint="Filter by price"
          value={priceRange}
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
          value={sortType}
          onSelectChange={SortSelectChange}
          Options={[
            { title: "Price", value: "price" },
            { title: "Title", value: "title" },
          ]}
        />
        <CustomBtn onClick={resetFilter} label="Reset Filters" />
      </FilterBar>
      
      <ResortsList resorts={currentPageItems} />
      
      <PaginationWrapper>
        <PaginationButton onClick={() => setCurentPage(0)}>
          First
        </PaginationButton>
        <PaginationButton onClick={prevPage}>Prev</PaginationButton>
        
        <p>Page {currentPage + 1}  of  {totalPages}</p>
        <PaginationButton onClick={nextPage}>Next</PaginationButton>
        <PaginationButton onClick={() => setCurentPage(totalPages - 1)}>
          Last
        </PaginationButton>
      </PaginationWrapper>
    </PageWrapper>
  );
};

export default Resorts;
