import { Resort } from "../../interfaces";
import { SearchInput } from "./searchBoxStyles";


const SearchBox = (props:{data:Resort[], setData: (data: Resort[]) => void}) => {
  const filterData: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const filteredData = props.data.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    props.setData(filteredData);
  };
  return <SearchInput placeholder="Search..." onChange={filterData} />;
};

export default SearchBox;
