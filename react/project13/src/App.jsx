import "./App.css";
import ClassComponents from "./components/ClassComponents";
import ComponentWillUnmount from "./components/ComponentWillUnmount";
import DidMount from "./components/DidMount";
import GetDrived from "./components/getDrived";
import Parent from "./components/Parent";

function App() {
  return (
    <>
      {/* <ClassComponents />
      <Parent />
      <GetDrived colorPrps="white" />
      <DidMount /> */}
      <ComponentWillUnmount />
    </>
  );
}

export default App;
