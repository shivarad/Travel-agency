
import { SearchInput } from "./searchBoxStyles";

const SearchBox = (props: {onChange:React.ChangeEventHandler<HTMLInputElement>}) => {

  
  return <SearchInput placeholder="Search..." onChange={props.onChange} />;
};

export default SearchBox;
