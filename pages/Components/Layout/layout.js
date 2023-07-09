import Navbar from "../Navbar/navbar";
import CustomFooter from "../footer";

export default function Layout({ children }) {
    return <div>
      <Navbar/>
      {children}
      <CustomFooter />
      </div>;
  }