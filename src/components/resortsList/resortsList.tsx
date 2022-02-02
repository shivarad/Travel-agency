import ResortCard from "../resortCard/resortCard";
import { Resort } from "../../interfaces";
import {ListWraper} from "./resortListStyles"
interface ResortsProps {
  resorts: Resort[];
}

const ResortsList: React.FC<ResortsProps> = ({ resorts }: ResortsProps) => {
  return (
    <ListWraper>
      {resorts.map((item) => (
        <ResortCard
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </ListWraper>
  );
};

export default ResortsList;
