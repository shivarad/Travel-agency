import { SearchInput, SearchBtn } from "./searchBoxStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const SearchBox = (props: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <SearchInput placeholder="Search..." onChange={props.onChange} />
      
      <SearchBtn onClick={props.handleClick}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchBtn>
    </>
  );
};

export default SearchBox;
