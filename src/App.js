import { useEffect, useState } from "react";
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import listVideoApi from "./api/listVideoApi";
import productApi from "./api/productApi";
import './App.scss';
import Footer from './components/Footer/Footer';
import { AuthProvider } from "./contexts/AuthContext";
import { auth } from "./firebase";
import Account from "./pages/Account";
import Main from "./pages/Main.jsx";
import PrivateRouter from "./pages/PrivateRouter";
import Sign from "./pages/Sign";
import UploadVideo from "./pages/UploadVideo";
function App() {

  /* useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        }
        const response = await productApi.getAll(params);
        console.log(response)
      } catch (error) {
        console.log("Failde to fetch product list", error)
      }
    }
    fetchProductList();
  }, [])
 */
  /* useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(user => {
      if (!user) {
        console.log("No user login")
        return
      }
      console.log("User login :", user.email)
    })
    return () => unregisterAuthObserver();
  }, []) */


  return (

    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/upload">
              <UploadVideo></UploadVideo>
            </Route>
            <PrivateRouter exact path="/user" component={Account}></PrivateRouter>
            <Route path="/sign" component={Sign}>

            </Route>
            <Route path="/info" component={Account}>
            </Route>
          </Switch>
        </AuthProvider>

        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
