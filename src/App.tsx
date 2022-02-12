import React, {FC} from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./store/store";
import AppPage from "./pages/AppPage";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const store = setupStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppPage/>
        <ToastContainer/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
