import { SelectWrapper } from "./selectStyles";

interface selectOption {
  title: string;
  value: string;
}
const Select = (props: {
  Options: selectOption[];
  onSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
 
}) => {
  return (
    <SelectWrapper onChange={props.onSelectChange} >
      {props.Options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </SelectWrapper>
  );
};
export default Select;
