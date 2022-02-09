import React, { useCallback, useEffect, useState } from "react";
import {
  FilterBar,
  PageWrapper,
} from "./ResortsStyles";
import { Resort } from "../../interfaces";
import { SortData, filterByPrice, filterByTitle } from "../../utils";
import ResortsList from "../../components/resortsList/resortsList";
import Data from "../../data";
import SearchBox from "../../components/searchBox/searchBox";
import Select from "../../components/select/select";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import BackToTopBtn from "../../components/BackToTopButton/backToTopButton";
import Pagination from "../../components/pagination/pagination";

const Resorts = () => {
  const [resorts, setResorts] = useState<Resort[] | null>(Data);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("none");
  const [sortType, setSortType] = useState<string>("none");

  /***********pagination states and functions************************************************/
  const [currentPage, setCurentPage] = useState(0);
  const itemsPerPage = 20;
  const [currentPageItems, setCurrentPageItems] = useState<Resort[]>([]);
  const totalPages = resorts ? Math.ceil(resorts.length / itemsPerPage) : 0;

  useEffect(() => {
    if (resorts)
      setCurrentPageItems(
        resorts?.slice(currentPage, currentPage + itemsPerPage)
      );
  }, [currentPage, resorts]);

  /*****************filter functions****************************************** */

  const resetFilter = () => {
    setSearchTerm("");
    setSortType("none");
    setPriceRange("none");
    setResorts([...Data]);
  };

  const filterData = useCallback(() => {
    let filteredData = null;
    if (priceRange !== "none") filteredData = filterByPrice(Data, priceRange);
    if (searchTerm !== "")
      filteredData = filterByTitle(
        filteredData ? filteredData : Data,
        searchTerm
      );
    if (sortType !== "none")
      filteredData = SortData(filteredData?.length ? filteredData : Data, sortType);
    setResorts(filteredData);
  }, [priceRange, searchTerm, sortType, Data]);

  /**************************************************************************************************** */

  useEffect(() => {
    if (priceRange !== "none") filterData();
  }, [priceRange, filterData]);

  /************event handlers*********************************************************************** */

  const SortSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortT = event.target.value;
    setSortType(sortT);
    setResorts(SortData(resorts?.length?resorts:Data, sortT));
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
        <SearchBox
          value={searchTerm}
          onChange={handleSearchChange}
          handleClick={filterData}
        />
        <Select
          Hint="Filter by price"
          value={priceRange}
          onSelectChange={PriceSelectChange}
          Options={[
            { title: "0-500 $", value: "0-500" },
            { title: "500-700 $", value: "500-700" },
            { title: "700-1000 $", value: "700-1000" },
            { title: "1000-2000 $", value: "1000-2000" },
            { title: "2000-3000 $", value: "2000-3000" },
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
      <BackToTopBtn />
      <Pagination currentPage={currentPage} setCurentPage={setCurentPage} totalPages={totalPages}/>
    </PageWrapper>
  );
};

export default Resorts;
