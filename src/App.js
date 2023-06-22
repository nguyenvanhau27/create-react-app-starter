import "./App.css";
import Footer from "./container/footer";
import Header from "./container/header";
import Filter from "./page/filter";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  document.title = "Phòng giáo dục và đào tạo quận Phú Nhuận";
  return (
    <div className="App">
      <Header />
      <Filter />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
