import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HompePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndUpPage from "./pages/sign-in-up-page/sign-in-up-page.component";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HompePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
