import Header from "./navbar/index";
import Footer from "./footer/index";


const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout