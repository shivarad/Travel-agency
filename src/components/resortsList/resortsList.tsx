import ResortCard from "../resortCard/resortCard";
import { Resort } from "../../interfaces";
import {ListWraper} from "./resortListStyles"
interface ResortsProps {
  resorts: Resort[] |null;
}

const ResortsList: React.FC<ResortsProps> = ({ resorts }: ResortsProps) => {
  return (
    <ListWraper>
      {resorts?resorts.map((item) => (
        <ResortCard
          key={item.id}
          resort={item}
        />
      )):null}
    </ListWraper>
  );
};

export default ResortsList;
