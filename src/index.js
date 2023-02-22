import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AllImages from "./pages/AllImages.js";
import MyImages from "./pages/MyImages";
import AllUsers from "./pages/AllUsers";
import NoPage from "./pages/NoPage";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="all_images" element={<AllImages />} />
          <Route path="my_images" element={<MyImages />} />
          <Route path="all_users" element={<AllUsers />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);