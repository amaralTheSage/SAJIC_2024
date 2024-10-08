import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header className="font-Inter" />
      <Outlet className="font-Inter" />
      <Footer />
    </div>
  );
}

export default App;
