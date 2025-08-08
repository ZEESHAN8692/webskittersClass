import dynamic from "next/dynamic";
import Footer from "../footer/Footer";
const Header = dynamic(() => import("../header/Header"));

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
