import { useOutletContext } from "react-router-dom";
import Stage3 from "./Stage3";

const Stage3Wrapper = () => {
  const context = useOutletContext();
  return <Stage3 context={context} />;
};

export default Stage3Wrapper;
