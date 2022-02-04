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
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      )):null}
    </ListWraper>
  );
};

export default ResortsList;
