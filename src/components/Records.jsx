import { records } from "../assets/records";
import Cards from "./Cards";
import Wrapper from "./Wrapper";

export default function Records() {
  return (
    <Wrapper title="Releases">
      {records.map((record) => (
        <Cards key={record.title} record={record} />
      ))}
    </Wrapper>
  );
}
