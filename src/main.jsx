import React from "react"
import ReactDOM from "react-dom/client"
import App from "./public/App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import "./config/i18n/i18n"
import { Provider } from "react-redux"
import store  from "./interfaces/ui/redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </React.Fragment>
);

serviceWorker.unregister()